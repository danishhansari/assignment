import { Link } from "react-router-dom";
import closeBtnIcon from "../assets/closeBtn.png";

const Navbar = ({ closeBtn }) => {
  return (
    <nav className="flex justify-between items-center p-2 rounded-full">
      <Link to="/">
        <img className="w-24 md:w-28" src="./logo.png" alt="Brunel" />
      </Link>
      {closeBtn ? (
        <Link to="/">
          <img className="w-12 md:w-16" src={closeBtnIcon} alt="Brunel Logo" />
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
