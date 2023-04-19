import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export const DataApiContext = createContext();

const DataApiProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);
  const [client, setClient] = useState(null);
  const [category, setCategory] = useState(null);

  const [render, setRender] = useState(false);

  let navigate = useNavigate();

 

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((res) => setProduct(res.data));

    axios
      .get(`http://localhost:3001/clients`)
      .then((res) => setClient(res.data));

    axios
      .get(`http://localhost:3001/category`)
      .then((res) => setCategory(res.data));

    axios
      .get(`http://localhost:3001/seller`)
      .then((res) => setSeller(res.data));


  }, [render]);


  const deleteRegister = async (endpoint, id) =>{

    await axios.delete(`http://localhost:3001/${endpoint}/${id}`);
    alert('Produto deletado com sucesso! ');
    setRender(!render);
    navigate('/');
       
  } 





  return (
    <>
      <DataApiContext.Provider value={{ product, seller, client, category, setRender, deleteRegister }}>
        {children}
      </DataApiContext.Provider>
    </>
  );
};

export default DataApiProvider;
