const HomeFooter = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] py-9 px-7 rounded-3xl flex flex-col md:flex-row gap-2 justify-between items-center">
        <p className="text-md md:text-lg">
          &copy; Talup 2023. All rights reserved
        </p>
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-md md:text-lg">
          <li className="underline">Terms & Conditions</li>
          <li className="underline">Privacy Policy</li>
        </ul>
      </footer>
    </>
  );
};

export default HomeFooter;
