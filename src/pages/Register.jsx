import RegistrationForm from "../components/register/RegistrationForm";
import RegistrationNav from "../components/register/RegistrationNav";

const Register = () => {
  return (
    <>
      <div className="max-h-screen bg-white text-black w-full px-[2vw] py-2 md:py-4">
        <RegistrationNav />
        <div className="whFull flex justify-center mt-20 md:mt-28">
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Register;
