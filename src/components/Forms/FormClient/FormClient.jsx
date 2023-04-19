import axios from "axios";
import { useState } from "react";


const FormClient = ({setRender, render}) => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        age: null,
      });
    
      const postClient = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/clients`, client);
        setRender(!render);

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
                id="name"
                type="text"
                required={true}
                onChange={setClientInputs}
              />
              <label> Email </label>
              <input
                id="email"
                type="text"
                required={true}
                onChange={setClientInputs}
              />
    
              <label> Age </label>
              <input
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