import { Outlet } from "react-router-dom";

function App() {
  return (
   <>
   <h1> Header </h1>
        <Outlet/>
   <h1> Footer  </h1>
   </>
  );
}

export default App;
