import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </main>
        <Footer></Footer>
    </>
  );
};

export default Main;
