import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../common/logo.svg';

const Header = () => {

  const navigate = useNavigate();
  return (
    <>
        
        <header className='flex justify-between items-center'>
        <Link>
            <img src={logo} alt='Logo' />
        </Link>

        <ul className='flex gap-4'>
            <li> <Link to='/'> Home </Link>   </li>
            <li> <Link to='/register'> Register </Link>   </li>
            <li> <Link to='/data/product'> Data </Link>   </li>
        </ul>

        </header>
    </>
  )
}

export default Header;