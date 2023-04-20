import './Header.css';
import { Link} from 'react-router-dom';

import logo from '../../common/logo.svg';

const Header = () => {


  return (
    <>
        
        <header className='flex justify-between items-center'>
        <Link>
            <img src={logo} alt='Logo' />
        </Link>

        <ul className='flex gap-4'>
            <li> <Link to='/'> Home </Link>   </li>
            <li> <Link to='/register/product'> Register </Link>   </li>
            <li> <Link to='/data/product'> Data </Link>   </li>
        </ul>

        </header>
    </>
  )
}

export default Header;