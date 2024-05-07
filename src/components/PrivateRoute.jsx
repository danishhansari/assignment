import { useEffect } from "react";
import { registerAtom } from "../states/atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ component }) => {
  const navigate = useNavigate();
  const registerState = useRecoilValue(registerAtom);
  useEffect(() => {
    if (!registerState.email || !registerState.name) {
      toast.error("Registration is pending");
      navigate("/register");
    }
  }, [registerState, navigate]);

  return <>{component}</>;
};

export default PrivateRoute;
