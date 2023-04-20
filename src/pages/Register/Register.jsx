import "./Register.css";
import { useContext, useEffect} from "react";
import { DataApiContext } from "../../context/DataApi";
import RegisterHeader from "../../components/RegisterHeader/RegisterHeader";
import { Outlet } from "react-router-dom";

const Register = () => {
  const { setRender, render } = useContext(DataApiContext);

  useEffect(() => {
    setRender(!render);
  }, []);

  return (
    <>
      <RegisterHeader />
      <Outlet />
    </>
  );
};

export default Register;
