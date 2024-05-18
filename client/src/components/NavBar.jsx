import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <>
      <div className="grid justify-center items-center text-center">
        <div className="flex justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
