import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { DataRoutesContext } from "../../../context/DataRoutes";
import { regex } from "../../../utils/regex";

const FormCategory = ({ data }) => {
 
  const { pathname } = useContext(DataRoutesContext);
  const [endpointID, setEndpointID] = useState(null);

  const [verify, setVerify] = useState(true);

  const { setRender, render } = useContext(DataApiContext);

  const [category, setCategory] = useState({
    description: "",
  });

  useEffect(() => {
    if (pathname.includes("/data")) {
      setEndpointID(regex.exec(pathname).index);

      setVerify(false);

      const { description } = data[0];

      setCategory({
        description: description,
      });
    }
  }, []);

  const postCategory = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:3001/category`, category);

    setCategory({
      description: "",
    });

    setRender(!render);

    alert('Registered successfully!');
  };

  const updateCategory = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/category/${endpointID}`, category);

    setRender(!render);

    setCategory({
      description: "",
    });
    alert('Successfully updated!');

  };

  function setCategoryInputs({ target }) {
    const { id, value } = target;
    setCategory({ ...category, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={verify ? postCategory : updateCategory}>
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
