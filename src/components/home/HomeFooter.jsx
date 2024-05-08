const HomeFooter = () => {
  return (
    <>
      <footer className="bg-[#F5F5F5] py-2 px-4 md:py-10 md:px-8 rounded-3xl columnFlex justify-between md:flex-row gap-2 ">
        <p className="text-md md:text-lg">
          &copy; Talup 2023. All rights reserved
        </p>
        <ul className="flex columnFlex md:flex-row gap-2 md:gap-12 text-md md:text-lg underline">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </>
  );
};

export default HomeFooter;
