import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { useNavigate } from "react-router-dom";
import { DataRoutesContext } from "../../../context/DataRoutes";
import { regex } from "../../../utils/regex";

const FormProduct = ({ data }) => {
  const { category, setRender, render } = useContext(DataApiContext);
  const [verify, setVerify] = useState(true);
  const [endpointID, setEndpointID] = useState(null);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: undefined,
    category: category.length <= 0 ? undefined :  category[0].id,
  });


  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);


  useEffect(() => {
    if (pathname.includes("/data")) {
      setEndpointID(regex.exec(pathname).index);
      setVerify(false);

      const { title, description, price, category } = data[0];

      setProduct({
        title: title,
        description: description,
        price: Number(price),
        category: Number(category),
      });
    }
  }, []);

  const postProduct = (e) => {
    e.preventDefault();

    product.price = Number(product.price);

    axios.post(`http://localhost:3001/product`, product);

    setRender(!render);

    setProduct({
      title: "",
      description: "",
      price: undefined,
      category: undefined,
    });

    alert("Registered successfully!");
  };

  const updateProduct = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/product/${endpointID}`, product);

    setRender(!render);

    setProduct({
      title: "",
      description: "",
      price: undefined,
      category: 1,
    });
    alert("Successfully updated!");
  };

  function setProductInputs({ target }) {
    const { id, value } = target;

    if (id === "category") {
      let categoryCorrect = category.filter((item) => {
        return item.description === value;
      });

      setProduct({ ...product, [id]: Number(categoryCorrect[0].id) });
    } else {
      setProduct({ ...product, [id]: value });
    }
  }

  return (
    <>
      {category.length >= 1 && category !== undefined ? (
        <div className="container">
          <form onSubmit={verify ? postProduct : updateProduct}>
            <label> Title </label>

            <input
              value={product.title}
              id="title"
              type="text"
              required={true}
              onChange={setProductInputs}
            />
            <label> Description </label>
            <textarea
              value={product.description}
              id="description"
              type="text"
              required={true}
              onChange={setProductInputs}
            />

            <label> Price </label>
            <input
              value={Number(product.price)}
              id="price"
              type="number"
              required={true}
              onChange={setProductInputs}
            />

            <label> Category </label>

            <select id="category" onChange={setProductInputs}>
              {category.map((item) => {
                return <option key={item.id}> {item.description} </option>;
              })}
            </select>

            <button> Send </button>
          </form>
        </div>
      ) : (
        <>
          <p>
            {" "}
            It is not possible to register a product before there are categories
          </p>

          <button onClick={() => navigate("/register/category")}>
            {" "}
            Category{" "}
          </button>
        </>
      )}
    </>
  );
};

export default FormProduct;
