import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PhotosPage from "./pages/PhotosPage";
import AlbumsPage from "./pages/AlbumsPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";

import AuthenticatedRoutes from "./util/AuthenticatedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage/>} path = "/login" exact/>
        <Route element={<AuthenticatedRoutes/>}>
          <Route element={<PhotosPage/>} path="/photos" exact/>
          <Route element={<AlbumsPage/>} path="/albums" exact/>
          <Route element={<AccountPage/>} path="/Account" exact/>
        </Route>
        <Route element={<Navigate to="/photos"/>} path='*'/>
      </Routes>
    </Router>
    /*
    <>
      <Navbar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>*/
  );
};

export default App;
