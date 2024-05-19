import { Link } from "react-router-dom";
import Button from "./ui/Button";

function SideMenu() {
  return (
    <>
      <div className="p-5 border-r-2">
        <ul className="mt-5">
          <Link to="/calculator">
            <Button text="Calculator" />
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
