import { useState, useRef } from "react";
import { baseurl } from "../Urlinclude.js";

const UploadResume = ({ profile }) => {
    const profileJson = JSON.parse(profile);

    const jwtToken = profileJson.response;
    const roles = profileJson.user.roles.map(role => role.role);

    const hasAccess = roles.some(role => {
        return ["RECRUITER", "SRRECRUITER", "RECRUITERADMIN"].includes(role)
    });

    if (!hasAccess) {
        window.location.replace('/profile');
    }

    const dropZone = useRef(null);

    const [filesToUpload, setFiles] = useState([]);
    const [parsedResumes, setParsedResumes] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    async function uploadFiles() {
        setIsUploading(true);

        const uploadPromises = filesToUpload.map((file) => {
            let formData = new FormData;
            formData.set('file', file, file.name);
            formData.set('applicantType',  profileJson.applicantType);

            return fetch(`${baseurl}/applicant/uploadFile`, {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: 'Bearer ' + jwtToken
                }
            });
        });

        const responses = await Promise.all(uploadPromises);
        const resJson = await Promise.all(responses.map(res => res.json()));

        console.log(resJson);

        setParsedResumes(resJson);
        setIsUploading(false);
    }

    function handleDrop(event) {
        event.preventDefault();

        let files = [];

        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach((item) => {
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    files.push(file);
                }
            });
        } else {
            [...event.dataTransfer.files].forEach((file) => {
                files.push(file);
            });
        }

        setFiles(files);
    }

    function handleDragOver(event) {
        event.preventDefault();

        const element = dropZone.current;
        element.style.background = "orange";
    }

    function handleDragLeave() {
        const element = dropZone.current;
        element.style.background = "#5780b3";
    }

    if (!hasAccess) {
        return <></>
    }

    if (isUploading) {
        return <>
            <div >
                <h1>
                    Uploading please wait ...
                </h1>
            </div>
        </>
    }

    return <>
        <div >
            <div>
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <div
                        ref={dropZone}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#5780b3',
                            width:'100%',
                            color: 'white',
                            height: '200px',
                            padding: '1rem'
                        }}>
                        <p
                            style={{
                                margin: '0',
                            }}
                        >
                            drag and drop files here, see if color is being Oranged
                        </p>
                    </div>
                    {filesToUpload.length > 0 && <button onClick={uploadFiles}>
                        upload
                    </button>
                    }
                </div>

                {parsedResumes.length > 0 &&
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {parsedResumes.map((resume, i) => {
                            const { applicantDto } = resume;
                            console.log(applicantDto);

                            return <div
                                key={resume.fileName + i}
                                style={{
                                    padding: '5px'
                                }}
                            >
                                <h3>
                                    {resume.fileName}
                                </h3>                            
                            </div>
                        })}
                    </div>
                }
            </div>
        </div>
    </>
}

export default UploadResume;
