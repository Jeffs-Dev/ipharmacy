import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <h1>
          {" "}
          Register you products <span>made simple</span> <br /> for small
          business.
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.{" "}
        </p>

        <div>
          <Link to="/register" className="button">
            {" "}
            Register{" "}
          </Link>
          <Link to="/data" className="button">
            {" "}
            Records{" "}
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
