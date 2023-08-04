import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import LoadingSpinner from './LoadingSpinner';
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function AnimatedModal(props) {
    const classes = useStyles();
    const [data, setData] = useState(props.remarks)
    const [open, setOpen] = React.useState(false);
    console.log(data)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    if (!data) {
        return <div className="productList"> <LoadingSpinner /></div>;
    }
    return (
        <div>
            <Button variant="contained" style={{ width: "200px" }} color="primary" onClick={handleOpen}>
                Add Remarks
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>Add Recuriter/Manager Remarks </h2>
                        <Paper elevation={3} sx={{ margin: "3%", padding: "5%" }}>
                            <Box sx={{ padding: "5%" }}></Box>
                            <Grid  >
                                <Grid item xs={12} sm={2}>
                                    <InputLabel
                                        sx={{
                                            display: "flex",
                                            justifyContent: "start",
                                            fontWeight: 700
                                        }}
                                    >
                                        Recruiter Id
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        required
                                        id={data.userId}
                                        name={data.userId}
                                        label={data.userId}
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
                                        Remarks
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        required
                                        id={data.userId}
                                        name={data.userId}
                                        label={data.userId}
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
                                        Remark Added Date
                                    </InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        required
                                        id={data.userId}
                                        name={data.userId}
                                        label={data.userId}
                                        helperText
                                        fullWidth
                                        size="small"
                                        autoComplete="off"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Button sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }} variant="contained">Contained</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <div class="table-responsive">
                            <table class="table table-striped w-auto">
                                <thead>
                                    <tr>
                                        <th className="col col-md-1">Sr #</th>
                                        <th className="col col-md-2">User</th>
                                        <th className="col col-md-4">Remark</th>
                                        <th className="col col-md-1">Date Created</th>
                                        <th className="col col-md-2">Date Modified</th>
                                        <th className="col col-md-1">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map(function (data, index) {
                                        return (
                                            <tr>
                                                <td>{(index + 1)}</td> <td> {data.userId}</td><td> {data.remark}</td><td> {data.dateCreated}</td>
                                                <td> {data.dateModified}</td>   <button>Edit</button>     </tr>
                                        )
                                    })}

                                </tbody>
                            </table>




                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}