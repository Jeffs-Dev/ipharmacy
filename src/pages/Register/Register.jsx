import { useContext, useState } from 'react';
import './Register.css';
import FormProduct from '../../components/Forms/FormProduct/FormProduct';
import { DataApiContext } from '../../context/DataApi';
import FormClient from '../../components/Forms/FormClient/FormClient';
import FormSeller from '../../components/Forms/FormSeller/FormSeller';

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

            {renderForm === 'Client' ? <FormClient setRender={setRender} render={render}/> : ''}

            {renderForm === 'Seller' ? <FormSeller setRender={setRender} render={render} /> : ''}
            
            {renderForm === 'Category' ? <h1> Form Category</h1> : ''}


    </>
  )
}

export default Register;