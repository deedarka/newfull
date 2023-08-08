import { BasicPage } from "../components/BasicPage";
import Person from "@mui/icons-material/Person";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useAuth } from "../hooks/useAuth";

export const ProfilePage = () => {
  const { login, user, logout } = useAuth();
  return (
    <Container>
 <Card sx={{ margin: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100"
          image={user?.user?.profilePicture}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       First Name  - {user?.user?.firstName}
        
          
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
       Last Name  - {user?.user?.lastName}
        
          
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
       Full Name  - {user?.user?.fullName}
        
          
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Email - {user?.user?.email}
        
          
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
          Contact - {user?.user?.mobileNumber}
        
          
          </Typography>
          
          
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
)
};
