import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import Main from "./components/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
