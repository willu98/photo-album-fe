import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const AuthenticatedRoutes = () => {
    let auth = localStorage.getItem("user");
    console.log(auth);
    return(
        <>
            {auth ? 
                <>            
                    <Navbar/>
                    <SideBar/>
                    <Outlet/>
                </> : 
                <Navigate to="/login"/>
            }
        </>
    );
}

export default AuthenticatedRoutes;