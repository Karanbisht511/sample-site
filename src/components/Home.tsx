import "./Home.css";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="home-container">
      <div id="home">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
