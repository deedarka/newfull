import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import {baseurl} from "../Urlinclude"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    

    // here call the login api and set that inlocalstorage http://localhost:8077/api/v1/applicant/downloadFile/Dice_Resume_CV_Paul_Okwechime.pdf

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "JSESSIONID=73ECC78F7E4796F6666C6114D967A0D9");
    
    var raw = JSON.stringify({
      "email": data.email,
      "password": data.password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${baseurl}/user/authenticate`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status!=='success'){
          setUser(null);
          navigate("/", { replace: true });
        }
        setUser(result);
        console.log("The User Log "+user)}
      )
      .catch(error => console.log('error', error));
    navigate("/dashboard/profile", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
