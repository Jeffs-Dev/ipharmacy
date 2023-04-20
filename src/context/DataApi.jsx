import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataApiContext = createContext();

const DataApiProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);
  const [client, setClient] = useState(null);
  const [category, setCategory] = useState(null);

  const [render, setRender] = useState(false);

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

  const deleteRegister = async (endpoint, id) => {
    if (endpoint === "category") {
      let data = await axios
        .get(`http://localhost:3001/${endpoint}/${id}`)
        .then((res) => res.data);

      let verify = await product.some((item) => {
        return item.category === data.id;
      });

      if (verify) {
        alert("Não pode deletar uma categoria que está sendo utilizada");
        return;
      } else {
        await axios.delete(`http://localhost:3001/${endpoint}/${id}`);

        alert("Deletado com sucesso! ");
        setRender(!render);
      }
    } else {
      await axios.delete(`http://localhost:3001/${endpoint}/${id}`);

      alert("Deletado com sucesso! ");
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
          render,
          setRender,
          deleteRegister,
        }}
      >
        {children}
      </DataApiContext.Provider>
    </>
  );
};

export default DataApiProvider;
