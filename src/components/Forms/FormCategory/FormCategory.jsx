import axios from "axios";
import { useState } from "react";

const FormCategory = ({ setRender, render }) => {
  const [category, setCategory] = useState({
    description: "",
  });

  const postCategory = async (e) => {
     e.preventDefault();

    await axios.post(`http://localhost:3001/category`, category);
    
    setCategory({
      description: "",
    });
    
    setRender(!render);
  };

  function setCategoryInputs({ target }) {
    const { id, value } = target;
    setCategory({ ...category, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={postCategory}>
          <label> Description </label>

          <input
            value={category.description}
            id="description"
            type="text"
            required={true}
            onChange={setCategoryInputs}
          />

          <button> Send </button>
        </form>
      </div>
    </>
  );
};

export default FormCategory;
