import { lazy } from "react";
import girlImg from "../../assets/girl.png";
const AchievementWidget = lazy(() => import("./widgets/AchievementWidget"));
const StaffDeploymentWidget = lazy(() =>
  import("./widgets/StaffDeploymentWidget")
);
const MillionWidget = lazy(() => import("./widgets/MillionWidget"));

const HomeHeroLeft = () => {
  return (
    <>
      <div className="relative w-2/3 md:w-full">
        <img src={girlImg} alt="" />
        <AchievementWidget />
        <StaffDeploymentWidget />
        <MillionWidget />
      </div>
    </>
  );
};

export default HomeHeroLeft;
