import spark from "../../../assets/spark.png";

const AchievementWidget = () => {
  return (
    <>
      <div className="absolute top-12 -left-12 md:-left-16 md:top-36 max-w-[190px] w-2/3 md:w-full bg-white rounded-3xl p-2 md:p-6 py-6 md:py-8 shadow-lg">
        <img
          src={spark}
          className="absolute -top-4 md:-top-4 -left-5 md:-left-3 w-20 md:w-24"
          alt=""
        />
        <h3 className="text-xl md:text-4xl font-bold ml-2 my-2">40%</h3>
        <p className="md:hidden text-xs text-[#828282] font-semibold">
          Achieved reduction in project execution time
        </p>
        <p className="leading-wide text-[#828282] font-semibold text-xs md:text-md w-full hidden md:block tracking-wide">
          Achieved reduction in project execution time by optimising team
          availablity
        </p>
      </div>{" "}
    </>
  );
};

export default AchievementWidget;
