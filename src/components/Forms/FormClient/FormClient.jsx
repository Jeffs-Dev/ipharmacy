import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { DataRoutesContext } from '../../../context/DataRoutes';
import { useNavigate } from "react-router-dom";

const FormClient = ({ data }) => {
  const { setRender, render } = useContext(DataApiContext);

  const [verify, setVerify] = useState(true);

  const [client, setClient] = useState({
    name: "",
    email: "",
    age: "",
  });


  const navigate = useNavigate();
  const { pathname } = useContext(DataRoutesContext);

  const endpointID = pathname.slice(-1);



  useEffect(() => {

    if (pathname.includes("/data")) {

      setVerify(false);

      const { name, email, age } = data[0];

      setClient({
        name: name,
        email: email,
        age: Number(age),
      })
    }

  }, [])








  const postClient = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/clients`, client);
    setRender(!render);

    setClient({
      name: "",
      email: "",
      age: "",
    });

    alert('Cadastrado com sucesso!')
    navigate('/');

  };

  const updateClient = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/clients/${endpointID}`, client);

    setRender(!render);

    setClient({
      name: "",
      email: "",
      age: undefined,
    });
    alert('Atualizado com sucesso!')
    navigate('/');
  };



  function setClientInputs({ target }) {
    const { id, value } = target;

    setClient({ ...client, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={verify ? postClient : updateClient }>
          <label> Name </label>

          <input
            value={client.name}
            id="name"
            type="text"
            required={true}
            onChange={setClientInputs}
          />
          <label> Email </label>
          <input
            value={client.email}
            id="email"
            type="text"
            required={true}
            onChange={setClientInputs}
          />

          <label> Age </label>
          <input
            value={client.age}
            id="age"
            type="number"
            required={true}
            onChange={setClientInputs}
          />

          <button> Send </button>
        </form>
      </div>
    </>
  );
};
export default FormClient;
