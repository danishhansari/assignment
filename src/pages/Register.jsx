import { lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const RegistrationForm = lazy(() =>
  import("../components/register/RegistrationForm")
);

const Register = () => {
  return (
    <>
      <div className="navAndPage">
        <Navbar closeBtn={true} />
        <div className="whFull flex justify-center mt-20 md:mt-28">
          <RegistrationForm />
        </div>
      </div>
    </>
  );
};

export default Register;
