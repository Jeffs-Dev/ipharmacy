import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataApiContext = createContext();

const DataApiProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);
  const [client, setClient] = useState(null);
  const [category, setCategory] = useState(null);
  const [sale, setSale] = useState(null);

  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product`)
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
    
      axios
      .get(`http://localhost:3001/sale`)
      .then((res) => setSale(res.data));

  }, [render]);

  

  const deleteRegister = async (endpoint, id) => {
    
    if (endpoint === "category") {

      console.log('deletando uma categoria!')
      let data = await axios
        .get(`http://localhost:3001/${endpoint}/${id}`)
        .then((res) => res.data);

      let verifyCategory = await product.some((item) => {
        return item.category === data.id;
      });

      if (verifyCategory) {
        alert("Cannot delete a category that is being used");
        return;
      } else {
        await axios.delete(`http://localhost:3001/${endpoint}/${id}`);

        alert("Successfully deleted! ");
        setRender(!render);
      }
    } 

    if (endpoint === "sale"){
      console.log('Você está deletanto uma sale!!!!')
    }
    
    
    else {
      await axios.delete(`http://localhost:3001/${endpoint}/${id}`);

      alert("Successfully deleted! ");
      setRender(!render);
    }
  };



  return (
    <>
      <DataApiContext.Provider
        value={{
          product,
          seller,
          client,
          category,
          sale,
          render,
          setRender,
          deleteRegister
        }}
      >
        {children}
      </DataApiContext.Provider>
    </>
  );
};

export default DataApiProvider;
