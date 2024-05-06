import { Link } from "react-router-dom";
import closeBtn from "../../assets/closeBtn.png";

const RegistrationNav = () => {
  return (
    <nav className="flex justify-between items-center p-2 rounded-full">
      <Link to="/">
        <img className="w-24 md:w-28" src="./logo.png" alt="Brunel" />
      </Link>
      <Link to="/">
        <img className="w-12 md:w-16" src={closeBtn} alt="Brunel" />
      </Link>
    </nav>
  );
};

export default RegistrationNav;
