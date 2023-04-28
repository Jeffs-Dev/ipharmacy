import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import DataApiProvider from "./context/DataApi";
import DataRoutesProvider from "./context/DataRoutes";

function App() {

  let arr = [
    {
      title: "Banana",
      description: "...",
      price: 1,
      category: 1,
      id: 1
    },
    {
      title: "Watermelon",
      description: "...",
      price: 2,
      category: 1,
      id: 2
    },
    {
      title: "Lord of Rings",
      description: "...",
      price: 200,
      category: 2,
      id: 3
    }
  ]

 

  const lul = arr.reduce((acc, item) => acc + item.price, 0)

  console.log(lul)












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
