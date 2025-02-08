import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const AuthenticatedRoutes = () => {
  if (
    localStorage.getItem("user") &&
    Date.parse(localStorage.getItem("expiry")) > Date.parse(new Date())
  ) {
    return (
      <>
        <Navbar />
        <SideBar />
        <Outlet />
      </>
    );
  } else {
    localStorage.clear();
    return <Navigate to="/login" />;
  }
};

export default AuthenticatedRoutes;
