import { Link } from "react-router-dom";
import FileViewer from 'react-file-viewer';
import CommentIcon from '@mui/icons-material/Comment';
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
import { Avatar, Box, Button, CardHeader, Checkbox, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { CheckBox, Label, LabelImportant } from "@material-ui/icons";
import CustomList from "./CustomList";
import ChipsArray from "./GenericChips";

function Bootcamp() {


    const [upload, setUpload] = React.useState(false);
    const [checked, setChecked] = React.useState([0]);    
    const { login, user, logout } = useAuth();
    let location = useLocation();
    let urlParts = location.pathname.split('/');
    const applicant = urlParts[urlParts.length - 1]
    const [loading, setLoading] = useState(false);
    const [farmApplicant, setFarmApplicant] = useState({});
    const [data, setData] = useState({})
    const [url, setUrl] = useState("")
    const [submissionDate, setSubmissionDate] = useState({});
    const [positionReceivingDate, setPositionReceivingDate] = useState({});
    const [dateOfContact, setDateOfContact] = useState({});
    const [date, setDate] = useState(new Date());

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

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
    }, [upload]);
    const handleChange = (event) => {

        alert(event.target.value)
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
        "GC-EAD",
        "GC",
        "Citizen",
        "Others",
    ];
    const empType = [
        "W2",
        "c2c",
        "Corp",
        "Others",
    ];
    return (
        <div className="product" >

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
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    alt={data?.recruiter?.userName}
                                                    src={data?.recruiter?.userPicture}
                                                />
                                            }
                                            title={data?.recruiter?.userName}
                                        />

                                        <div> Unique ID : <span style={{ color: "green" }}>{data.id}</span></div>
                                        <div> Resource Type : <span style={{ color: "orange" }}>{data.applicantType}</span> </div>

                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                        <div style={{ margin: "4px" }}><AnimatedModal remarks={data.remarks} recruiter={data.recruiter} ></AnimatedModal>                                        </div>
                                        <div style={{ margin: "4px" }}><SubmissionModel remarks={data.remarks}></SubmissionModel>                                        </div>
                                        <div style={{ margin: "4px" }}><Button style={{ width: "200px" }} color="secondary" variant="contained" >
                                            Edit
                                        </Button>          </div>
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
                                            id="name"
                                            name="name"
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
                                            id="email"
                                            name="email"
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
                                            id="phone"
                                            name="phone"
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
                                        <ChipsArray type="university" items={data.university}></ChipsArray>


                                        {/* <TextField
                                            required
                                            id={data.university}
                                            name={data.university}
                                            label={data.university}
                                            helperText
                                            fullWidth
                                            size="small"
                                            autoComplete="off"
                                            variant="outlined"
                                        /> */}
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

                                        <ChipsArray type="designation" items={data.designation}></ChipsArray>
                                        {/* <CustomList  height={400}
                                            width={360}
                                            itemSize={46}
                                            itemCount={200}
                                            overscanCount={5} items={data.designation}></CustomList> */}
                                        {/* <TextField
                                            id={data.designation}
                                            name={data.designation}
                                            label={data.designation}
                                            multiline
                                            fullWidth
                                            text
                                            rows={1}
                                        /> */}
                                    </Grid>

                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                fontWeight: 700
                                            }}
                                        >
                                            Degrees
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <ChipsArray type="degree" items={data.degree}></ChipsArray>

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
                                        <ChipsArray type="skills" items={data.skills}></ChipsArray>

                                        {/* <TextField
                                            id={data.skills}
                                            name={data.skills}
                                            label={data.skills}
                                            multiline
                                            fullWidth
                                            text
                                            rows={5}
                                        /> */}
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
                                            <InputLabel id={`select-label-${data.resumeSource}`}>{data.resumeSource}</InputLabel>
                                            <Select
                                                labelId={`select-label-${data.resumeSource}`}
                                                id={`${data.resumeSource}`}
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


                                        <DatePicker sx={{
                                            display: "flex",
                                            justifyContent: "start",
                                            fontWeight: 900
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
                                        <DatePicker sx={{
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
                                        <DatePicker sx={{
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
                                            id={data.positionTitle}
                                            name={data.positionTitle}
                                            label={data.positionTitle}
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
                                            <InputLabel id={`select-label-${data.visaStatus}`}>{data.visaStatus}</InputLabel>
                                            <Select
                                                labelId={`select-label-${data.visaStatus}`}
                                                id={`${data.visaStatus}`}
                                                label="Visa Status"
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
                                            Pay Rate
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>

                                        <Input value={data.payRate}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
                                            Tags
                                        </InputLabel>


                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <ChipsArray type="tags" items={data.tags}></ChipsArray>
                                        {/* <TextField
                                            id={data.tags}
                                            name={data.tags}
                                            label={data.tags}
                                            multiline
                                            fullWidth
                                            text
                                            rows={1}
                                        /> */}
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
                                            <InputLabel id={`select-label-${data.candidateEmploymentType}`}>{data.candidateEmploymentType}</InputLabel>
                                            <Select
                                                labelId={`select-label-${data.candidateEmploymentType}`}
                                                id={`${data.candidateEmploymentType}`}
                                                label="Employement Type"
                                                onChange={handleChange}
                                            >
                                                {empType.map((item) => (
                                                    <MenuItem value={item}>{item}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Willing Relocate
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <CheckBox
                                            required
                                            id={data.willingRelocation}
                                            name={data.willingRelocation}
                                            label={data.willingRelocation}
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