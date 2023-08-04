import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
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
export default function SubmissionModel(props) {
    const classes = useStyles();
    const [data, setData] = useState(props.remarks)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>



            
            <Button variant="contained" style={{width:"200px"}} color="warning" onClick={handleOpen}>
             Submissions 
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
                        <h2>Add Submissions Data </h2>
                        <div class="table-responsive">
  <table class="table table-striped w-auto">
    <thead>
      <tr>
        <th scope="col">Sr #</th>
        <th scope="col">User</th>
        <th scope="col">Remark</th>
        <th scope="col">Date Created</th>
        <th scope="col">Date Modified</th>
      </tr>
    </thead>
    <tbody>
    {
     
    }
    
     
    </tbody>
  </table>
</div>
                    
                   
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}