import union from "../assets/union.png";
import Qna from "./QnA";
const Faq = () => {
  return (
    <>
      <div className="md:min-h-[75vh] w-full bg-[#e8eee7] rounded-3xl mb-4 md:mb-8">
        <p className="headingCursive pt-8 md:pt-16 text-left pl-8 md:pl-24 text-[#9e9d9d] text-md md:text-2xl">
          What's on your mind
        </p>
        <div className="flex columnFlex md:items-start md:flex-row w-full justify-between md:pr-8 gap-4">
          <div className="w-full">
            <h1 className="text-3xl md:text-6xl font-semibold pl-8 md:pl-24">
              Ask Questions
            </h1>
            <img
              className="mt-12 md:mt-24 hidden md:block"
              src={union}
              alt="union"
            />
          </div>

          <div className="w-full ">
            <Qna />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
