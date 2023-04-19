import { useContext, useState } from 'react';
import './Register.css';
import FormProduct from '../../components/Forms/FormProduct/FormProduct';
import { DataApiContext } from '../../context/DataApi';

const Register = () => {

    const [renderForm, setRenderForm] = useState('Product');

    const {category, setRender, render} = useContext(DataApiContext);

    


  return (
    <>
        <nav>
          <ul>
            <li>
              <button onClick={({target}) => setRenderForm(target.innerText)}>
                {" "}
                Product{" "}
              </button>
            </li>
            <li>
              <button onClick={({target}) => setRenderForm(target.innerText)}>
                {" "}
                Client{" "}
              </button>
            </li>
            <li>
              <button onClick={({target}) => setRenderForm(target.innerText)}>
                {" "}
                Seller{" "}
              </button>
            </li>
            <li>
              <button onClick={({target}) => setRenderForm(target.innerText)}>
                {" "}
                Category{" "}
              </button>
            </li>
          </ul>
        </nav>

            {category !== undefined && renderForm === 'Product' ? ( <FormProduct category = {category ? category : ''} setRender={setRender} render={render}/> ) : ''}

            {renderForm === 'Client' ? <h1> Form Client</h1> : ''}

            {renderForm === 'Seller' ? <h1> Form Seller</h1> : ''}
            
            {renderForm === 'Category' ? <h1> Form Category</h1> : ''}


    </>
  )
}

export default Register;