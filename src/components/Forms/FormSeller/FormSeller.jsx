import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { DataRoutesContext } from "../../../context/DataRoutes";
import { regex } from "../../../utils/regex";

const FormSeller = ({ data }) => {
  const { setRender, render } = useContext(DataApiContext);
  const [verify, setVerify] = useState(true);
  const [endpointID, setEndpointID] = useState(null);

  const [seller, setSeller] = useState({
    name: "",
    location: "",
  });


  const { pathname } = useContext(DataRoutesContext);

  useEffect(() => {
    if (pathname.includes("/data")) {
      setEndpointID(regex.exec(pathname).index);

      setVerify(false);

      const { name, location } = data[0];

      setSeller({
        name: name,
        location: location,
      });
    }
  }, []);

  const postSeller = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3001/seller`, seller);
    setRender(!render);

    setSeller({
      name: "",
      location: "",
    });

    alert('Registered successfully!');
   
  };

  const updateSeller = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/seller/${endpointID}`, seller);

    setRender(!render);

    setSeller({
      name: "",
      location: "",
    });
    alert('Updated successfully!');
  
  };

  function setSellerInputs({ target }) {
    const { id, value } = target;

    setSeller({ ...seller, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={verify ? postSeller : updateSeller}>
          <label> Name </label>

          <input
            value={seller.name}
            id="name"
            type="text"
            required={true}
            onChange={setSellerInputs}
          />
          <label> Location </label>
          <input
            value={seller.location}
            id="location"
            type="text"
            required={true}
            onChange={setSellerInputs}
          />

          <button> Send </button>
        </form>
      </div>
    </>
  );
};

export default FormSeller;
