import axios from 'axios';
import { useState } from 'react';

const FormCategory = ({setRender, render}) => {
    const [category, setCategory] = useState({
        description: "",

      });
    
      const postCategory = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/category`, category);
        setRender(!render);

      };
    
      function setCategoryInputs({ target }) {
        const { id, value } = target;
        
          setCategory({ ...category, [id]: value });
        
      }
    
      return (
        <>
          <div className="container">
            <form onSubmit={postCategory}>
              <label> Description </label>
    
              <input
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