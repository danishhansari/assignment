import { Link } from "react-router-dom";
import closeBtn from "../assets/closeBtn.png";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  return (
    <>
      <div className="overflow-hidden h-screen bg-white text-black w-full px-[2vw] py-2 md:py-4">
        <nav className="flex justify-between items-center p-2 px-4 rounded-full">
          <Link to="/">
            <img src="./logo.png" alt="Brunel" />
          </Link>
          <Link to="/">
            <img src={closeBtn} alt="Brunel" />
          </Link>
        </nav>

        <div className="w-full h-full flex justify-center mt-28">
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Register;
