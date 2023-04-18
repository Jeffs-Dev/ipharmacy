import "./Data.css";
import { useContext, useState } from "react";
import { DataApiContext } from "../../context/DataApi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Paper } from "@mui/material";

const Data = () => {
  const { product, client, seller, category } = useContext(DataApiContext);
  const [renderTable, setRenderTable] = useState("Product");

  let categoryName = category.find((item) => {
    return item.id === 2;
  });

  console.log(categoryName.description);

  return (
    <>
      {product[0].title ? (
        <nav>
          <ul>
            <li>
              <button onClick={(e) => setRenderTable(e.target.innerText)}>
                {" "}
                Product{" "}
              </button>
            </li>
            <li>
              <button onClick={(e) => setRenderTable(e.target.innerText)}>
                {" "}
                Client{" "}
              </button>
            </li>
            <li>
              <button onClick={(e) => setRenderTable(e.target.innerText)}>
                {" "}
                Seller{" "}
              </button>
            </li>
            <li>
              <button onClick={(e) => setRenderTable(e.target.innerText)}>
                {" "}
                Category{" "}
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        "Loading..."
      )}

      {product !== undefined &&
      renderTable === "Product" &&
      category !== undefined ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center">Title&nbsp;</TableCell>
                <TableCell align="center">Description&nbsp;</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Category</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {product.map((row) => {

                let {description} = category.find((item) => item.id === row.id);
                
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{description}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}

      {client !== undefined && renderTable === "Client" ? (
        <h1> Client Table </h1>
      ) : (
        ""
      )}
      {seller !== undefined && renderTable === "Seller" ? (
        <h1> Seller Table </h1>
      ) : (
        ""
      )}
      {category !== undefined && renderTable === "Cetegory" ? (
        <h1> Category Table </h1>
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
