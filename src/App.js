import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import AlbumsPage from "./pages/AlbumsPage";
import LoginPage from "./pages/LoginPage";
import PhotosPage from "./pages/PhotosPage";

import AuthenticatedRoutes from "./util/AuthenticatedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/login" exact />
        <Route element={<AuthenticatedRoutes />}>
          <Route element={<PhotosPage />} path="/photos" exact />
          <Route element={<AlbumsPage />} path="/albums" exact />
          <Route element={<AccountPage />} path="/Account" exact />
        </Route>
        <Route element={<Navigate to="/photos" />} path="*" />
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
