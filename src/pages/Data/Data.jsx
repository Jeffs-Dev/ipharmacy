import "./Data.css";
import { Outlet } from "react-router-dom";
import DataHeader from "../../components/DataHeader/DataHeader";

const Data = () => {
  return (
    <>
      <DataHeader />
      <Outlet />
    </>
  );
};

export default Data;
