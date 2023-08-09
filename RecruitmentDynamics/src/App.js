import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer
} from "react-router-dom";
import { LoginPage } from "./pages/Login";
import BootcampList from "./components/BootcampList";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";
import { BootcampListPage } from "./pages/BootcampList";

import "./styles.css";
import { AuthLayout } from "./components/AuthLayout";
import Bootcamp from "./components/Bootcamp";
import { BootcampPage } from "./pages/Bootcamp";
import { BootcampList3pPage } from "./pages/BootcampList3p";
import Dashboard from "./pages/Dashboard";

// ideally this would be an API call to server to get logged in user data

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

// for error
// const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );

export const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="dashboard" element={<ProtectedLayout />}>
        <Route path="home" element={<Dashboard />} />
        <Route path="applicantsbc" element={<BootcampListPage />} />
        <Route path="applicantstp" element={<BootcampList3pPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="applicantsbc/:bootcampId" element={<BootcampPage />} />
        <Route path="applicantstp/:bootcampId" element={<BootcampPage />} />
      </Route>
    </Route>
  )
);
