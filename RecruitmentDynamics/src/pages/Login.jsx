import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";

export const LoginPage = () => {
  const { login,error } = useAuth();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate()
  const handleClose = (event, reason) => {
    localStorage.setItem("error",null);
    setOpen(false);
  };
  const action = (
    <React.Fragment>
      {error?.response} 
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
       
      </IconButton>
    </React.Fragment>
  );

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password")
    });   
    
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >

    

        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/register">
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>

     

   
        {

        error!==null?

        <Snackbar
        anchorOrigin={ { vertical: 'top', horizontal: 'right' }}
        open={open}
       
        onClose={handleClose}
        message="Login Error "
        action={action}
      />
        // <Snackbar anchorOrigin={ { vertical: 'top', horizontal: 'right' }}
        // open={true}   
        // message={
        //   <Alert  severity="error" sx={{ width: '100%' }}>
        //   The profile {error.response} uploaded now you can farmed it!
        //   </Alert>}
        // onClose={() => alert()}
        // key={error.response}/>
        // 
        :<></>
      } 
      </Box>
    </Container>
  );
};
