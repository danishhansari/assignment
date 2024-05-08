import { lazy } from "react";
const HomeNav = lazy(() => import("../components/home/HomeNav"));
const HomeHero = lazy(() => import("../components/home/HomeHero"));
const HomeFooter = lazy(() => import("../components/home/HomeFooter"));
const Home = () => {
  return (
    <>
      <div className="p-2 md:p-4">
        <HomeNav />
        <div className="px-0 md:px-[6vw]">
          <HomeHero />
        </div>
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
