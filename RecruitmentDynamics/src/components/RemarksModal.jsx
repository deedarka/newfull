import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Avatar, Box, Button, Card, CardHeader, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
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
export default function AnimatedModal({ remarks, recruiter }) {
    const classes = useStyles();
    const [data, setData] = useState(remarks)
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
                            <Box sx={{ padding: "0%" }}></Box>
                            <Grid  >
                                <Grid item xs={12} sm={12}>
                                    <CardHeader
                                        helperText                                       
                                        
                                        avatar={
                                            <Avatar
                                            sx={{ width: 100, height: 100 }}
                                                alt={recruiter?.userName}
                                                src={recruiter?.userPicture}
                                            />
                                        }
                                        title={recruiter?.userName}
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
                                        rows={3}
                                        multiline
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
                                    }} fullWidth
                                        size="small"
                                        variant="contained">Add Remark</Button>
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