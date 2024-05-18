import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";

function Root() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5 m-10">
        <SideMenu />
        <div className="p-3 col-span-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
