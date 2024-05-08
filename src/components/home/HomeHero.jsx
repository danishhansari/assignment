import HomeHeroLeft from "./HomeHeroLeft";
import HomeHeroRight from "./HomeHeroRight";
const HomeHero = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="heading flex flex-col items-center justify-center my-9 md:my-16">
          <h2 className="headingCursive mt-2 md:mt-6">success stories</h2>
          <h1 className="text-3xl md:text-5xl font-semibold w-full md:w-1/3 text-center">
            Every Success journey we've encountered.
          </h1>
        </div>

        <div className="flex columnFlex md:flex-row w-full md:w-11/12 mx-auto justify-center md:items-start gap-8 mt-8 md:mt-12">
          <HomeHeroLeft />
          <HomeHeroRight />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
