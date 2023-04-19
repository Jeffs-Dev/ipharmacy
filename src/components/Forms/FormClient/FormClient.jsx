import axios from "axios";
import { useState } from "react";

const FormClient = ({ setRender, render }) => {
  const [client, setClient] = useState({
    name: "",
    email: "",
    age: undefined,
  });

  const postClient = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/clients`, client);
    setRender(!render);

    setClient({
      name: "",
      email: "",
      age: '',
    });
  };

  function setClientInputs({ target }) {
    const { id, value } = target;

    setClient({ ...client, [id]: value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={postClient}>
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
