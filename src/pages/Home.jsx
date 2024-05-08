import { lazy } from "react";
const HomeNav = lazy(() => import("../components/home/HomeNav"));
const HomeHero = lazy(() => import("../components/home/HomeHero"));
const HomeFooter = lazy(() => import("../components/home/HomeFooter"));
import Faq from "../components/Faq";
const Home = () => {
  return (
    <>
      <div className="p-2 md:p-6">
        <HomeNav />
        <div className="md:px-[6vw]">
          <HomeHero />
        </div>
        <Faq />

        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
