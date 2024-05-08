import { useEffect, useState } from "react";
import { registerAtom } from "../states/atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();
  const registerState = useRecoilValue(registerAtom);
  const [isRegister, setRegister] = useState(true);
  useEffect(() => {
    if (!registerState.email || !registerState.name) {
      toast.error("Registration is pending");
      navigate("/register");
    }
    setRegister(false);
  }, [registerState, navigate]);

  return (
    <>
      {isRegister && <Loader />}
      {component}
    </>
  );
};

export default PrivateRoute;
