import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className=" p-2 md:p-4 flex justify-between items-center border border-[#eaeaea] rounded-full">
      <Link to="/" className="ml-4">
        <img className="w-24 md:w-28" src="./logo.png" alt="Brunel" />
      </Link>
      <div className="cta flex items-center gap-4">
        <Link to="/register">
          <button className="btnSecondary">Get Projects</button>
        </Link>
        <button className="btnPrimary hidden md:block">Onboard Talent</button>
      </div>
    </nav>
  );
};

export default HomeNav;
