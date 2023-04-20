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
  const { product, client, seller, category, deleteRegister } =
    useContext(DataApiContext);

  const [renderTable, setRenderTable] = useState("Product");

  return (
    <>
      <nav>
        <ul>
          <li>
            <button
             style={renderTable==='Product' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
            onClick={(e) => setRenderTable(e.target.innerText)}>
              Product
            </button>
          </li>
          <li>
            <button
            style={renderTable==='Client' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
            onClick={(e) => setRenderTable(e.target.innerText)}>
              Client
            </button>
          </li>

          <li>
            <button
            style={renderTable==='Seller' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
            onClick={(e) => setRenderTable(e.target.innerText)}>
              Seller
            </button>
          </li>
          <li>
            <button
            style={renderTable==='Category' ? {'text-decoration': 'underline'} : {'text-decoration': 'none'}}
            onClick={(e) => setRenderTable(e.target.innerText)}>
              Category
            </button>
          </li>
        </ul>
      </nav>

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
                let lul = category.find((item) => item.id === row.category);

                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{lul.description}</TableCell>
                    <TableCell align="center">
                      <div className="action">
                        <button
                          onClick={() => {
                            deleteRegister("products", row.id);
                          }}
                        >
                          Delete
                        </button>

                        <button>
                          <Link to={`/data/product/${row.id}`}>Update</Link>
                        </button>
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
                        <button
                          onClick={() => {
                            deleteRegister("clients", id);
                          }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                        <button>
                          {" "}
                          <Link to={`/data/client/${id}`}> Update </Link>{" "}
                        </button>
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
                <TableCell align="center">Location&nbsp;</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {seller.map(({ id, name, location }) => {
                return (
                  <TableRow key={id}>
                    <TableCell align="center">{id}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{location}</TableCell>
                    <TableCell align="center">
                      <div className="action">
                        <button
                          onClick={() => {
                            deleteRegister("seller", id);
                          }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                        <button>
                          {" "}
                          <Link to={`/data/seller/${id}`}> Update </Link>{" "}
                        </button>
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
                        <button
                          onClick={() => {
                            deleteRegister("category", id);
                          }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                        <button>
                          {" "}
                          <Link to={`/data/category/${id}`}> Update </Link>{" "}
                        </button>
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
