import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

import { useNavigate } from "react-router-dom";
import { DataRoutesContext } from "../../../context/DataRoutes";

const FormSale = ({data}) => {

  
  const { setRender, render } = useContext(DataApiContext);
  const [verify, setVerify] = useState(true);

  const [sale, setSale] = useState({
    description: "",
    take: undefined,
    pay: undefined,
  });


  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);

  const endpointID = pathname.slice(-1);

  useEffect(() => {

    if (pathname.includes("/data")) {

      setVerify(false);

      const { description, take , pay } = data[0];

      setSale({
        description: description,
        take: Number(take),
        pay: Number(pay),
      })

    } 

  }, [])


  const updateSale = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/sale/${endpointID}`, sale);

    setRender(!render);

    setSale({
      description: "",
      take: undefined,
      pay: undefined,

    });
    alert('Atualizado com sucesso!')
    navigate('/');
  };


  const postSale = (e) => {
    e.preventDefault();

    const { description ,take, pay } = sale;

    if (take <= pay) {
        
      alert(
        "The amount to be taken must always be greater than the amount to be paid"
      );
      return;

    } else {
      axios.post(`http://localhost:3001/sale`, {
        description: description,
        take: Number(take),
        pay: Number(pay)
      });
      setRender(!render);

      alert("Successfully registered!");

      setSale({
        description: "",
        take: undefined,
        pay: undefined,
      });
    }
  };

  function setSaleInputs({ target }) {
    const { id, value } = target;

    setSale({ ...sale, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={verify ? postSale : updateSale}>
          <label> Description </label>

          <input
            value={sale.description}
            id="description"
            type="text"
            required={true}
            onChange={setSaleInputs}
          />

          <label> Take </label>
          <input
            value={Number(sale.take)}
            id="take"
            type="number"
            required={true}
            onChange={setSaleInputs}
          />

          <label> Pay </label>
          <input
            value={Number(sale.pay)}
            id="pay"
            type="number"
            required={true}
            onChange={setSaleInputs}
          />

          <button> Send </button>
        </form>
      </div>
    </>
  );
};

export default FormSale;
