import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

const FormProduct = () => {
  const { category, setRender, render } = useContext(DataApiContext);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: undefined,
    category: undefined,
  });

  const postProduct = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/products`, product);

    setRender(!render);

    setProduct({
      title: "",
      description: "",
      price: undefined,
      category: 1,
    });
  };

  function setProductInputs({ target }) {
    const { id, value } = target;

    if (id === "category") {
      let categoryCorrect = category.filter((item) => {
        return item.description === value;
      });

      setProduct({ ...product, [id]: categoryCorrect[0].id });
    } else {
      setProduct({ ...product, [id]: value });
    }
  }

  return (
    <>
      {category.length >= 1 && category !== undefined ? (
        <div className="container">
          <form onSubmit={postProduct}>
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
              value={product.price}
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
        "navigate to category share"
      )}
    </>
  );
};

export default FormProduct;
