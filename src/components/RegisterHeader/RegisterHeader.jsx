import { Link } from "react-router-dom";

const RegisterHeader = () => {

  
  return (
    <>
        <nav>
        <ul>
          <li>
            <Link to={"/register/product"}> Product </Link>
          </li>
          <li>
            <Link to={"/register/client"}> Client </Link>
          </li>
          <li>
            <Link to={"/register/seller"}> Seller </Link>
          </li>
          <li>
            <Link to={"/register/category"}> Category </Link>
          </li>
          <li>
            <Link to={"/register/sale"}> Sale </Link>
          </li>
          <li>
            <Link to={"/register/budget"}> Budget </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default RegisterHeader;