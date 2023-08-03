import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const BasicPage = ({ title, icon }) => {
  return (
    <Container component="main" maxWidth="xxs">
      <Box
        sx={{
          marginTop: 10,
          marginLeft:22,
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 5, bgcolor: "primary.main" }}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          <title></title>
        </Typography>
      </Box>
    </Container>
  );
};
