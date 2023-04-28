import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import DataApiProvider from "./context/DataApi";
import DataRoutesProvider from "./context/DataRoutes";

function App() {

  return (
    <>
      <div className="px-4">
        <Header />
        <DataRoutesProvider> 
          <DataApiProvider>
            <Outlet />
          </DataApiProvider>
        </DataRoutesProvider>
      </div>
    </>
  );
}

export default App;
