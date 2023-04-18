import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import DataApiProvider from "./context/DataApi";

function App() {
  return (
    <>
      <div className="px-4">
        <Header />
        <DataApiProvider>
          <Outlet />
        </DataApiProvider>
        
      </div>
    </>
  );
}

export default App;
