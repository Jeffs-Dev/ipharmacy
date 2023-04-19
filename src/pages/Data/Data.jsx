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
import { Link } from "react-router-dom";

const Data = () => {
  const { product, client, seller, category } = useContext(DataApiContext);
  
  const [renderTable, setRenderTable] = useState("Product");

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
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {product.map((row) => {
                let lul = category.find(
                  (item) => item.id === row.category
                );

                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{lul.description}</TableCell>
                    <TableCell align="center">
                    <div className="action">
                    <button> Delete </button>
                    <button>  <Link to={`/data/product/${row.id}`}> Update </Link> </button>
                    </div>
                    
                    </TableCell>
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center">Name&nbsp;</TableCell>
                <TableCell align="center">Email&nbsp;</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {client.map(({ id, name, email, age }) => {
                return (
                  <TableRow key={id}>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{email}</TableCell>
                    <TableCell align="center">{age}</TableCell>
                    <TableCell align="center">
                    <div className="action">
                    <button> Delete </button>
                    <button>  <Link to={`/data/client/${id}`}> Update </Link> </button>
                    </div>
                    
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
      {seller !== undefined && renderTable === "Seller" ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center">Name&nbsp;</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {seller.map(({ id, name }) => {
                return (
                  <TableRow key={id}>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">
                    <div className="action">
                    <button> Delete </button>
                    <button>  <Link to={`/data/seller/${id}`}> Update </Link> </button>
                    </div>
                    
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
      {category !== undefined && renderTable === "Category" ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center">Name&nbsp;</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {category.map(({ id, description }) => {
                return (
                  <TableRow key={id}>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{description}</TableCell>
                    <TableCell align="center">
                    <div className="action">
                    <button> Delete </button>
                    <button>  <Link to={`/data/category/${id}`}> Update </Link> </button>
                    </div>
                    
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
