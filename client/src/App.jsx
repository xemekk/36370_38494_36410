import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 m-10">
        <SideMenu />
        <div className="">Content</div>
      </div>
    </>
  );
}

export default App;
