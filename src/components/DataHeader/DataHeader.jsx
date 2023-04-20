import { Link } from "react-router-dom";

const DataHeader = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/data/product"}> Product </Link>
          </li>
          <li>
            <Link to={"/data/client"}> Client </Link>
          </li>
          <li>
            <Link to={"/data/seller"}> Seller </Link>
          </li>
          <li>
            <Link to={"/data/category"}> Category </Link>
          </li>
          <li>
            <Link to={"/data/sale"}> Sale </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DataHeader;
