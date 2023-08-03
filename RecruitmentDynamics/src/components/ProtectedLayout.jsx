import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import  Sidebar  from "./Sidebar";
import Topbar from "./Topbar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <Topbar></Topbar>
   
    <div>
    <Sidebar></Sidebar>
      {outlet}
    </div>
    </>
  );
};
