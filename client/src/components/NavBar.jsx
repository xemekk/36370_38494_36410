import logo from "../assets/logo.png";

function NavBar() {
  return (
    <>
      <div className="grid grid-cols-3 justify-center items-center text-center">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-40 h-40" />
        </div>
        <div className="text-[#543310]">Calories calculator</div>
      </div>
    </>
  );
}

export default NavBar;
