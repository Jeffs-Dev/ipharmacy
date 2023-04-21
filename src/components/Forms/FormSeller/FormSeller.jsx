import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

import { useNavigate } from "react-router-dom";
import { DataRoutesContext } from "../../../context/DataRoutes";

const FormSeller = ({ data }) => {


  const { setRender, render } = useContext(DataApiContext);
  const [verify, setVerify] = useState(true);

  const [seller, setSeller] = useState({
    name: "",
    location: "",
  });


  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);

  const endpointID = pathname.slice(-1);

  useEffect(() => {

    if (pathname.includes("/data")) {

      setVerify(false);

      const { name, location } = data[0];

      setSeller({
        name: name,
        location: location,
      })


    }

  }, [])


  const postSeller = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3001/seller`, seller);
    setRender(!render);

    setSeller({
      name: "",
      location: "",
    });

    alert('Cadastrado com sucesso!')
    navigate('/');
  };

  const updateSeller = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/seller/${endpointID}`, seller);

    setRender(!render);

    setSeller({
      name: "",
      location: "",

    });
    alert('Atualizado com sucesso!')
    navigate('/');
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
