import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <>
      <div className="p-5 border-r-2">
        <ul className="mt-5">
          <Link to="/calculator">
            <li className="p-2 border-4 border-[#AF8F6F] rounded-2xl text-center hover:bg-[#AF8F6F]">
              Calculator
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
