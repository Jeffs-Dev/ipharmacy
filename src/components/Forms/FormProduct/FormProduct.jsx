import axios from "axios";
import { useState } from "react";

const FormProduct = ({ category, setRender, render }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: null,
    category: 1,
  });

  const postProduct = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/products`, product);
    setRender(!render);
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
      <div className="container">
        <form onSubmit={postProduct}>
          <label> Title </label>

          <input
            id="title"
            type="text"
            required={true}
            onChange={setProductInputs}
          />
          <label> Description </label>
          <textarea
            id="description"
            type="text"
            required={true}
            onChange={setProductInputs}
          />

          <label> Price </label>
          <input
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
    </>
  );
};

export default FormProduct;