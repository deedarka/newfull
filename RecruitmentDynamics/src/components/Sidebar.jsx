import '../css/component/sidebar.css'
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import CssBaseline from '@mui/material/CssBaseline';
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  WorkSharp,
  MenuRounded,
} from "@material-ui/icons";
import { Sidebar as Sb, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { useAuth } from "../hooks/useAuth";
import { Link, Navigate, useOutlet } from "react-router-dom";
import { Box, Container } from '@mui/material';
import { Fragment } from 'react';
function Sidebar() {
  const { user , logout} = useAuth();
  const outlet = useOutlet();
  const { collapseSidebar } = useProSidebar();
  return (
    <Fragment>
    <CssBaseline />
    <Container  maxWidth="100%"   sx={{display:'flex', height: "100vh"}} >

   
      <Sb >
      
        <Menu>
          <MenuItem
           
            className="menu1"
            icon={<MenuRoundedIcon  onClick={() => {
              collapseSidebar();
            }} />}
          >            
          </MenuItem>
          <MenuItem
            component={<Link to="/dashboard/home" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          
          <SubMenu label="Candidates" icon={<BarChartRoundedIcon />}>
            <MenuItem  component={<Link to="/dashboard/applicantsbc" className="link" />} icon={<TimelineRoundedIcon />}> Bench Candidates </MenuItem>
            <MenuItem component={<Link to="/dashboard/applicantstp" className="link" />}icon={<BubbleChartRoundedIcon />}>3rd Party Candidates</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<BubbleChartRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={()=>logout()}  icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      
      </Sb>
      
      {outlet}
    </Container>
    </Fragment>
  );
    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Dashboard</h3>
    //       <ul className="sidebarList">
    //         <Link to="/" className="link">
    //         <li className="sidebarListItem active">
    //           <LineStyle className="sidebarIcon" />
    //           Home
    //         </li>
    //         </Link>
    //         <li className="sidebarListItem">
    //           <Timeline className="sidebarIcon" />
    //           Analytics
    //         </li>
    //         <li className="sidebarListItem">
    //           <TrendingUp className="sidebarIcon" />
    //           Sales
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Quick Menu</h3>
    //       <ul className="sidebarList">
    //         <Link to="/dashboard/applicantstp" className="link">
    //           <li className="sidebarListItem">
    //             <PermIdentity className="sidebarIcon" />
    //             3rd Party Applicants
    //           </li>
    //         </Link>
    //         <Link to="/dashboard/applicantsbc" className="link">
    //           <li className="sidebarListItem">
    //             <Storefront className="sidebarIcon" />
    //             Bootcamp Applicants
    //           </li>
    //         </Link>
    //         <li className="sidebarListItem">
    //           <AttachMoney className="sidebarIcon" />
    //           Vendors
    //         </li>
    //         <li className="sidebarListItem">
    //           <BarChart className="sidebarIcon" />
    //           Clients
    //         </li>
    //         <li className="sidebarListItem">
    //           <BarChart className="sidebarIcon" />
    //           Reports
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Notifications</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <MailOutline className="sidebarIcon" />
    //           Mail
    //         </li>
    //         <li className="sidebarListItem">
    //           <DynamicFeed className="sidebarIcon" />
    //           Feedback
    //         </li>
    //         <li className="sidebarListItem">
    //           <ChatBubbleOutline className="sidebarIcon" />
    //           Messages
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="sidebarMenu">
    //       <h3 className="sidebarTitle">Staff</h3>
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem">
    //           <WorkOutline className="sidebarIcon" />
    //           Manage
    //         </li>
    //         <li className="sidebarListItem">
    //           <Timeline className="sidebarIcon" />
    //           Analytics
    //         </li>
    //         <li className="sidebarListItem">
    //           <Report className="sidebarIcon" />
    //           Reports
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  // );
}

export default Sidebar;