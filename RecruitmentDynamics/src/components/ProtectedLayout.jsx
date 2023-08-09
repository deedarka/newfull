import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ProSidebarProvider } from "react-pro-sidebar";
export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Topbar></Topbar>

      <ProSidebarProvider>
        <Sidebar>
        </Sidebar>

      </ProSidebarProvider>

    </>
  );
};
