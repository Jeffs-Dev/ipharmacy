import { useContext, useState } from 'react';
import './Register.css';
import FormProduct from '../../components/Forms/FormProduct/FormProduct';
import { DataApiContext } from '../../context/DataApi';
import FormClient from '../../components/Forms/FormClient/FormClient';
import FormSeller from '../../components/Forms/FormSeller/FormSeller';
import FormCategory from '../../components/Forms/FormCategory/FormCategory';

const Register = () => {

    const [renderForm, setRenderForm] = useState('Product');
    const {category, setRender, render} = useContext(DataApiContext);
 
  return (
    <>
        <nav>
          <ul>
            <li>
             
              <button
              
              style={renderForm==='Product' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
              
              onClick={({target}) => setRenderForm(target.innerText)}>
                Product
              </button>
            </li>
            <li>
              <button
               style={renderForm==='Client' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
              onClick={({target}) => setRenderForm(target.innerText)}>
                
                Client
              </button>
            </li>
            <li>
              <button
               style={renderForm==='Seller' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
              onClick={({target}) => setRenderForm(target.innerText)}>
                Seller
              </button>
            </li>
            <li>
              <button
               style={renderForm==='Category' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
              onClick={({target}) => setRenderForm(target.innerText)}>
                
                Category
              </button>
            </li>
          </ul>
        </nav>

            
            {
              category.length >= 1 && category !== undefined && renderForm === 'Product' ?
              (
                <FormProduct category = {category ? category : ''} setRender={setRender} render={render}/>
              ) : ''
            }


            {renderForm === 'Client' ? <FormClient setRender={setRender} render={render}/> : ''}

            {renderForm === 'Seller' ? <FormSeller setRender={setRender} render={render} /> : ''}
            
            {renderForm === 'Category' ? <FormCategory setRender={setRender} render={render}/> : ''}


    </>
  )
}

export default Register;