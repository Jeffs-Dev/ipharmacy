import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <div className="px-4">

      <Header />
        <Outlet />
      <h1> Footer </h1>
    </div>
    </>
  );
}

export default App;
