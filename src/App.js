import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
