import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { useNavigate } from "react-router-dom";
import { DataRoutesContext } from "../../../context/DataRoutes";
import { regex } from "../../../utils/regex";

const FormSale = ({ data }) => {
  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);
  const [endpointID, setEndpointID] = useState(null);

  const [verify, setVerify] = useState(true);

  const {sale: sales, product, setRender, render} = useContext(DataApiContext);

  const [sale, setSale] = useState({
    description: "",
    take: undefined,
    pay: undefined,
    product: product.length <= 1 ? undefined : product[0].id,
  });

  useEffect(() => {
    if (pathname.includes("/data")) {
      setEndpointID(regex.exec(pathname).index);
      setVerify(false);

      const { description, take, pay, product: productID } = data[0];

      setSale({
        description: description,
        take: Number(take),
        pay: Number(pay),
        product: productID,
      });
    }
  }, []);

  const updateSale = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/sale/${endpointID}`, sale);

    setRender(!render);

    setSale({
      description: "",
      take: undefined,
      pay: undefined,
      product: undefined,
    });
    alert("Successfully updated!");

  };

  const postSale = (e) => {
    e.preventDefault();

    const { description, take, pay, product: productID } = sale;

    if (take <= pay) {
      alert(
        "The amount to be taken must always be greater than the amount to be paid"
      );
      return;
    } else {
      axios.post(`http://localhost:3001/sale`, {
        description: description,
        take: Number(take),
        pay: Number(pay),
        product: Number(productID),
      });
      setRender(!render);

      alert("Successfully registered!");

      setSale({
        description: "",
        take: "",
        pay: "",
        product: undefined,
      });
    }
  };

  function setSaleInputs({ target }) {
    
    const { id, value } = target;

    if (id === "product") {
      let productCorrect = product.filter((item) => {
        return item.title === value;
      });

      setSale({ ...sale, [id]: Number(productCorrect[0].id) });
    } else {
      setSale({ ...sale, [id]: value });
    }
  }

  return (
    <>
      {product.length >= 1 && product !== undefined ? (
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

            <label> Product </label>

            <select id="product" onChange={setSaleInputs}>
              {product.map((item) => {
                return <option key={item.id}> {item.title} </option>;
              })}
            </select>

            <button> Send </button>
          </form>
        </div>
      ) : (
        <>
          <p>
            {" "}
            It is not possible to register a sale before there are products
          </p>

          <button onClick={() => navigate("/register/product")}>
            {" "}
            Product{" "}
          </button>
        </>
      )}
    </>
  );
};

export default FormSale;
