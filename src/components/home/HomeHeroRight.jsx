import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const HomeHeroRight = () => {
  return (
    <div className="mt-8 md:mt-24">
      <h2 className="text-2xl md:text-4xl font-medium w-full md:w-2/3 leading-tight md:leading-0">
        Enhance fortune 50 company's insights teams research capabilities
      </h2>
      <div className="flex mt-12 mb-4">
        <GoDotFill className="text-green-600" />
        <GoDotFill className="text-[#a6a6a6] " />
        <GoDotFill className="text-[#a6a6a6] " />
      </div>
      <button className="btnPrimary mt-6 md:mt-24 group">
        Explore More
        <FaArrowRight className="inline-block ml-2 group-hover:ml-3  transition-all" />
      </button>
    </div>
  );
};

export default HomeHeroRight;
