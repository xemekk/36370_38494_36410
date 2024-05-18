import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 m-10">
        <div className="">Sidebar</div>
        <div className="">Content</div>
      </div>
    </>
  );
}

export default App;
