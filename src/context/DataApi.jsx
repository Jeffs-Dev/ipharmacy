import axios from "axios";
import { createContext, useEffect, useState } from "react";

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


  return (
    <>
      <DataApiContext.Provider value={{ product, seller, client, category, setRender }}>
        {children}
      </DataApiContext.Provider>
    </>
  );
};

export default DataApiProvider;
