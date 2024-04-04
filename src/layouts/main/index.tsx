
import Cleaning from "../../components/cleaning";
import Nanny from "../../components/nanny";
import Home from "../../pages/home";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      <Home /> 
      <Cleaning />
      <Nanny />
      <Outlet />
    </div>
  );
};

export default MainLayout;
