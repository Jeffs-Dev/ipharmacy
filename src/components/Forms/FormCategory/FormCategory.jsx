import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";

import { useNavigate } from "react-router-dom";
import { DataRoutesContext } from "../../../context/DataRoutes";

const FormCategory = ({data}) => {
  const { setRender, render } = useContext(DataApiContext);
  const [verify, setVerify] = useState(true);

  const [category, setCategory] = useState({
    description: "",
  });

  
  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);

  const endpointID = pathname.slice(-1);

  useEffect(() => {

    if (pathname.includes("/data")) {

      setVerify(false);

      const {description } = data[0];

      setCategory({
        description: description
      })


    }

  }, [])
  
   
  
  
  
  const postCategory = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:3001/category`, category);

    setCategory({
      description: "",
    });

    setRender(!render);
  };



  const updateCategory = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/category/${endpointID}`, category);

    setRender(!render);

    setCategory({
      description: "",

    });
    alert('Atualizado com sucesso!')
    navigate('/');
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
