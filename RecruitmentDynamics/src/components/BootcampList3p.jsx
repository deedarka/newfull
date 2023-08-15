import { makeStyles } from "@material-ui/core/styles";
import '../css/page/productList.css'
import Hidden from "@material-ui/core/Hidden";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from './LoadingSpinner';
import { Container, Grid, Typography } from '@mui/material';
import UploadResume from './Upload';
import { useAuth } from "../hooks/useAuth";
import { baseurl } from '../Urlinclude';
import { green } from '@mui/material/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4)
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center"
  },
  icon: {
    padding: theme.spacing(2, 0)
  },
  title: {
    padding: theme.spacing(2)
  },
  featureList: {
    padding: theme.spacing(2)
  }
}));

function BootcampList3p() {
  const { login , user,logout} = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({})
  const classes = useStyles();

  

  useEffect(() => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.response}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${baseurl}/applicant/showAll3rdPartyApplicants`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result)
        console.log(result)
        setLoading(false);
      })
      .catch(error => console.log('error', error))
      .finally(() => {
        setLoading(false);
      });



  }, []);

  const columns = [
    { field: "Sl No", headerName: "Sl#", width: 10 },
    { field: "email", headerName: "E-Mail", width: 300 },
    { field: "phone", headerName: "Phone", width: 300 },
    { field: "name", headerName: "Full Name", width: 300 },
    { field: "visaStatus", headerName: "Visa Status", width: 300 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"" + params.row.id}>
              {params.row.markStatus === "farmed" ? <button className="productListView">View(Completed)</button>
                : <button className="productListEdit">Farm It (Pending)</button>
              }

            </Link>
          </>
        );
      },
    },
  ];

  if (loading) {
    return <div className="productList"> <LoadingSpinner /></div>;
  }

console.log("TTTTT"+ JSON.stringify(user))

user.applicantType="3rdparty"

  
  return (
    <Container component="section" maxWidth="lg" className={classes.root} flex>
    <Grid  >
        <h1 >All Bootcamp Applicants</h1>
        
        </Grid>
      <Typography ></Typography>
    
    
      <Typography gutterBottom sx={{ paddingBottom: 5 }}>

        <button variant="h6" style={{margin:"10px"}} className="productTitle applicantsAll"  sx={{ padding: 5 }} >All</button>
        <button variant="h6" style={{margin:"10px"}} className="productTitle applicantsByFarmed"  sx={{ padding: 5 }} >Farmed</button>
        <button variant="h6" style={{margin:"10px"}} className="productTitle applicantsByPending"  sx={{ padding: 5 }} >Pending</button>
         <span>Upload a profile ? <UploadResume profile={JSON.stringify(user)}></UploadResume></span> 
      
      </Typography>
<Hidden>
      <DataGrid 
        mdDown
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={data.length}

      />
      </Hidden>
    </Container>
  );
}

export default BootcampList3p;

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "product",
//     headerName: "Product",
//     width: 200,
//     renderCell: (params) => {
//       return (
//         <div className="productListItem">
//           <img className="productListImg" src={params.row.img} alt="" />
//           {params.row.name}
//         </div>
//       );
//     },
//   },
//   { field: "stock", headerName: "Stock", width: 200 },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 120,
//   },
//   {
//     field: "price",
//     headerName: "Price",
//     width: 160,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 150,
//     renderCell: (params) => {
//       return (
//         <>
//           <Link to={"/bootcamp/" + params.row.id}>
//             <button className="productListEdit">Add Resumes</button>
//           </Link>
//           <DeleteOutline
//             className="productListDelete"
//             // onClick={() => handleDelete(params.row.id)}
//           />
//         </>
//       );
//     },
//   },
// ];