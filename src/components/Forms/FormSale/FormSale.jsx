import axios from "axios";
import { useContext, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

const FormSale = () => {
  const { setRender, render } = useContext(DataApiContext);

  const [sale, setSale] = useState({
    description: "",
    take: undefined,
    pay: undefined,
  });

  const postSale = (e) => {
    e.preventDefault();

    const { take, pay } = sale;

    if (take <= pay) {
        
      alert(
        "The amount to be taken must always be greater than the amount to be paid"
      );
      return;

    } else {
      axios.post(`http://localhost:3001/sale`, sale);
      setRender(!render);

      alert("Successfully registered!");

      setSale({
        description: "",
        take: "",
        pay: "",
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
        <form onSubmit={postSale}>
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
            value={sale.take}
            id="take"
            type="number"
            required={true}
            onChange={setSaleInputs}
          />

          <label> Pay </label>
          <input
            value={sale.pay}
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
