import "./Main.css";
import HeroSection from "./HeroSection";
import CoService from "./CoService";
import InnovationSection from "./InnovationSection";
import BusinessSection from "./BusinessSection";
import CompanyScroll from "./CompanyScroll";
import ProjectShowcase from "./ProjectShowcase";
import StatsShowcase from "./StatsShowcase";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <CoService />
      <InnovationSection />
      {/* <Page3 /> */}
      <BusinessSection />
      <CompanyScroll />
      <ProjectShowcase />
      <StatsShowcase />
    </div>
  );
};

export default Main;
