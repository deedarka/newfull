import { Link } from "react-router-dom";
import '../css/page/product.css'
import Chart from './Chart';
import { productData } from "../dummyData";
import { DateRange, Publish } from '@material-ui/icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
function Bootcamp() {
    let location = useLocation();
    let urlParts = location.pathname.split('/');
    const applicant = urlParts[urlParts.length - 1]
    const [age, setAge] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    const [url, setUrl] = useState("")

    useEffect(() => {
        setLoading(true);

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaGVlcmFqLnNpbmdoQHNudmEuY29tIiwicm9sZXMiOlsiUEFSVElDSVBBTlQiXSwiZXhwIjoxNjkxMjcwNDc5fQ.LN4mMku82xtltJTY0lim-Tda_BzyrWqII-RfFcQ4jXgiO8gVpIAvTyDi9xPoa7TbfqX5oWVgrLAwtq3rQg0_gA");

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

    if (loading) {
        return <div className="productList"> <LoadingSpinner /></div>;
    }


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const categories = [
        "Dice",
        "Linkedin",
        "Monster",
        "Others",

    ];

    return (
        <div className="product" style={{marginLeft:"12%"}}>
            <div className="productTitleContainer">
                <h1 className="productTitle">Applicant</h1>

            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <React.Fragment>
                        <Paper elevation={3} sx={{ marginTop: "3%", marginRight: "1%", marginLeft: "1%" }}>
                            <Box sx={{ padding: 5 }}>
                                <div className="productTitleContainer">
                                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                        Id {data.id}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                        <Link to="/newproduct">
                                            <button className="saveRemark">Add Remark</button>
                                        </Link>
                                    </Typography>
                                </div>
                                <Grid container spacing={3}>


                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
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
                                                justifyContent: "center",
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
                                                justifyContent: "center",
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
                                                justifyContent: "center",
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
                                                {categories.map((item) => (
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
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
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
                                        <DateRange></DateRange>
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
                                        <DateRange></DateRange>
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
                                       <DateRange></DateRange>
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
                                            <InputLabel id="demo-simple-select-label">{data.resumeSource}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={data.resumeSource}
                                                label="Source"
                                                onChange={handleChange}
                                            >
                                                {categories.map((item) => (
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
                        url.includes(".doc") ? <iframe src={url} width='100%' height='100%' frameborder='0'>
                        </iframe> : <iframe src={url} width='100%' height='100%' frameborder='0'>
                        </iframe>
                    }



                </div>
            </div>

        </div>
    );
}

export default Bootcamp;


// <div className="productBottom">
// <form className="productForm">
//     <div className="productFormLeft">
//         <label>Product Name</label>
//         <input type="text" placeholder="Apple AirPod" />
//         <label>In Stock</label>
//         <select name="inStock" id="idStock">
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//         </select>
//         <label>Active</label>
//         <select name="active" id="active">
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//         </select>
//     </div>
//     <div className="productFormRight">
//         <div className="productUpload">
//             <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
//             <label for="file">
//                 <Publish/>
//             </label>
//             <input type="file" id="file" style={{display:"none"}} />
//         </div>
//         <button className="productButton">Update</button>
//     </div>
// </form>
// </div>