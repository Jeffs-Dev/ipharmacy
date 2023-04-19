import axios from "axios";
import { useState } from "react";


const FormSeller = ({setRender, render}) => {
    const [seller, setSeller] = useState({
        name: "",
        location: "",
      });
    
      const postSeller = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/seller`, seller);
        setRender(!render);

      };
    
      function setSellerInputs({ target }) {
        const { id, value } = target;
        
          setSeller({ ...seller, [id]: value });
        
      }
    
      return (
        <>
          <div className="container">
            <form onSubmit={postSeller}>
              <label> Name </label>
    
              <input
                id="name"
                type="text"
                required={true}
                onChange={setSellerInputs}
              />
              <label> Location </label>
              <input
                id="location"
                type="text"
                required={true}
                onChange={setSellerInputs}
              />  

              <button> Send </button>
            </form>
          </div>
        </>
      );
    };

export default FormSeller;