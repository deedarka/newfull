import { Link } from "react-router-dom";
import FileViewer from 'react-file-viewer';
import '../css/page/product.css'
import Chart from './Chart';
import { productData } from "../dummyData";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import AnimatedModal from "./RemarksModal";
import SubmissionModel from "./SubmissionModel";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { CheckBox } from "@material-ui/icons";
function Bootcamp() {
    const { login , user,logout} = useAuth();
    let location = useLocation();
    let urlParts = location.pathname.split('/');
    const applicant = urlParts[urlParts.length - 1]
    const [loading, setLoading] = useState(false);
    const [farmApplicant, setFarmApplicant] = useState({});
    const [data, setData] = useState({})
    const [url, setUrl] = useState("")
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setLoading(true);

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${user.response}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: applicant,
            redirect: 'follow'
        };

        fetch("http://localhost:8077/api/v1/applicant/applicantById", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log("AAAAA", result)
                setUrl(result.resumeLinks[0])
                setLoading(false);
            })
            .catch(error => console.log('error', error))
            .finally(() => {
                setLoading(false);
            });
    }, []);
    const handleChange = (event) => {
        
    };
    if (loading) {
        return <div className="productList"> <LoadingSpinner /></div>;
    }


   

    const sources = [
        "Dice",
        "Linkedin",
        "Monster",
        "Others",
    ];
    const visaStatus = [
        "Dice",
        "Linkedin",
        "Monster",
        "Others",
    ];

    return (
        <div className="product" style={{ marginLeft: "12%" }}>
           
            <div className="productTitleContainer">
                <h1 className="productTitle">Candiate Detailed Information</h1>

            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <React.Fragment>
                        <Paper elevation={3} sx={{ marginTop: "3%", marginRight: "1%", marginLeft: "1%" }}>
                            <Box sx={{ padding: 5 }}>
                                <div className="productTitleContainer">
                               
                                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                        <div> Unique ID : <span style={{color:"green"}}>{data.id}</span></div>
                                        <div> Resource Type : <span style={{color:"orange"}}>{data.applicantType}</span> </div>
                                        <div> Recruiter  : <span style={{color:"orange"}}></span> </div>
                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>                                        
                                    <div style={{margin:"4px"}}><AnimatedModal remarks={data.remarks}></AnimatedModal>                                        </div>
                                    <div style={{margin:"4px"}}><SubmissionModel remarks={data.remarks}></SubmissionModel>                                        </div>
                                    </Typography>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Name
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id={data.name}
                                            name={data.name}
                                            label={data.name}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Email
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id={data.email}
                                            name={data.email}
                                            label={data.email}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Phone
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id={data.phone}
                                            name={data.phone}
                                            label={data.phone}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            University
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id={data.university}
                                            name={data.university}
                                            label={data.university}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Designations
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            id={data.designation}
                                            name={data.designation}
                                            label={data.designation}
                                            multiline
                                            fullWidth
                                            text
                                            rows={1}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Degree
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            id={data.degree}
                                            name={data.degree}
                                            label={data.degree}
                                            multiline
                                            fullWidth
                                            text
                                            rows={1}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Skills
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            id={data.skills}
                                            name={data.skills}
                                            label={data.skills}
                                            multiline
                                            fullWidth
                                            text
                                            rows={5}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Source
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">{data.resumeSource}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={data.resumeSource}
                                                label="Source"
                                                onChange={handleChange}
                                            >
                                                {sources.map((item) => (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Total Exp.
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id={data.totalExp}
                                            name={data.totalExp}
                                            label={data.totalExp}
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    {/* dsds */}
                                    <Grid item xs={12} sm={4}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Date Of Contact
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <DatePicker  sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }} selected={date} onChange={(date) => setDate(date)} />

                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Position Receiving Date
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                    <DatePicker  sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }} selected={date} onChange={(date) => setDate(date)} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Submission Date
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                    <DatePicker  sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }} selected={date} onChange={(date) => setDate(date)} />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Position Title
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField
                                            required
                                            id={data.name}
                                            name={data.name}
                                            label={data.name}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Candidate Location
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <TextField
                                            required
                                            id={data.candidateLocation}
                                            name={data.candidateLocation}
                                            label={data.candidateLocation}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2.5}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Visa Status
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">{data.visaStatus}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={data.visaStatus}
                                                label="Source"
                                                onChange={handleChange}
                                            >
                                                {visaStatus.map((item) => (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            PayRate
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={1.5}>
                                        <TextField
                                            required
                                            id={data.totalExp}
                                            name={data.totalExp}
                                            label={data.totalExp}
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={1.5}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            USD
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Tags
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            id={data.tags}
                                            name={data.tags}
                                            label={data.tags}
                                            multiline
                                            fullWidth
                                            text
                                            rows={1}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Emp. Type
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">{data.resumeSource}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={data.resumeSource}
                                                label="Source"
                                                onChange={handleChange}
                                            >
                                                {sources.map((item) => (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            W. Relocate
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <CheckBox
                                            required
                                            id={data.totalExp}
                                            name={data.totalExp}
                                            label={data.totalExp}                                            
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    {/* End */}
                                    <Grid item xs={12} sm={6} />
                                    <Grid item xs={12} sm={5} />
                                    <Grid item xs={12} sm={4}>
                                        <Button variant="contained" sx={{ color: "#ff781f" }}>
                                            Save
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={5} />
                                </Grid>
                            </Box>
                        </Paper>
                    </React.Fragment>
                </div>
                <div className="productTopRight">
                    {
                        url.includes(".doc") ?
                            <FileViewer
                                fileType={'docx'}
                                filePath={url}
                            />
                            : <iframe src={url} width='100%' height='100%' frameborder='0'>
                            </iframe>
                    }
                </div>
            </div>
        </div>
    );
}
export default Bootcamp;