import Navbar from "../components/Navbar";
import checkMark from "../assets/check.png";
const Success = () => {
  return (
    <>
      <div className="navAndPage">
        <Navbar />
        <div className="h-full max-w-[900px] w-full mx-auto flex flex-col items-center mt-32 md:mt-44">
          <img src={checkMark} className="w-16 md:w-20" alt="checkmark" />
          <h2 className="headingCursive mt-2 md:mt-4">success submitted</h2>
          <h1 className="text-3xl md:text-5xl font-semibold md:font-medium">
            Congratulations
          </h1>
          <p className="text-lg md:text-3xl text-[#727272] text-center md:mt-4 font-medium px-2 w-full md:w-[90%]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
          <p className="text-[#727272] absolute bottom-6 text-center">
            Redirecting you to Homepage in
            <b className="text-[#1C1C1C]"> 5 Seconds</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;
