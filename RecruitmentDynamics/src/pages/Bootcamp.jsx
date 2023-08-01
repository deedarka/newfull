import { Link } from "react-router-dom";
import '../css/page/product.css'
import Chart from '../components/Chart';
import { productData } from "../dummyData";
import { Publish } from '@material-ui/icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
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
        "science",
        "sports",
        "business",
        "politics",
        "entertainment",
        "technology",
        "world",
        "all"
    ];

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Applicant</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Save</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <React.Fragment>
                        <Paper elevation={3} sx={{ marginTop:"3%", marginRight: "1%", marginLeft: "1%" }}>
                            <Box sx={{ padding: 5 }}>
                                <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                   Id {data.id}
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Title
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id="title"
                                            name="title"
                                            label="Title"
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
                                            Content
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Content"
                                            multiline
                                            fullWidth
                                            rows={4}
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
                                            URL
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10}>
                                        <TextField
                                            required
                                            id="url"
                                            name="url"
                                            label="URL"
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
                                            Category
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="Age"
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
                                            Author
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            required
                                            id="author"
                                            name="author"
                                            label="Author"
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
                                            Img Upload
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Button>

                                        </Button>
                                    </Grid>
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
                    <iframe src={url} width='100%' height='100%' frameborder='0'>
                    </iframe>
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