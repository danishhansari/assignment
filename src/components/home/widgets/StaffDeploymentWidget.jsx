import rocketIcon from "../../../assets/rocket.png";

const StaffDeploymentWidget = () => {
  return (
    <div className="animate-alternate flex gap-2 md:gap-4 rounded-full bg-white shadow-lg p-2 max-w-[170px] md:max-w-[230px] w-full absolute -left-12 bottom-4 md:bottom-16">
      <img className="w-10 md:w-12" src={rocketIcon} alt="rocket" />
      <div className="flex flex-col">
        <h2 className="text-md md:text-xl font-bold">10 DAYS</h2>
        <p className="text-xs md:text-sm font-medium text-[#828282]">
          Staff Deployment
        </p>
      </div>
    </div>
  );
};

export default StaffDeploymentWidget;
