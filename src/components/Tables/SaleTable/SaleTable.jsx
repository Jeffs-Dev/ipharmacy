import { useContext } from "react";
import { DataApiContext } from "../../../context/DataApi";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const SaleTable = () => {
  const { sale, deleteRegister, product } = useContext(DataApiContext);

  return (
    <>
      {sale !== undefined && product !== undefined ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center">Product&nbsp;</TableCell>
                <TableCell align="center">Description&nbsp;</TableCell>
                <TableCell align="center">Take</TableCell>
                <TableCell align="center">Pay</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sale.map(
                ({ id, description, take, pay, product: productCode }) => {
                  let { title } = product.find(
                    (item) => Number(item.id) === Number(productCode)
                  );

                  return (
                    <TableRow key={id}>
                      <TableCell align="center">{id}</TableCell>
                      <TableCell align="center">{title}</TableCell>
                      <TableCell align="center">{description}</TableCell>
                      <TableCell align="center">{take}</TableCell>
                      <TableCell align="center">{pay}</TableCell>
                      <TableCell align="center">
                        <div className="action">
                          <button
                            onClick={() => {
                              deleteRegister("sale", id);
                            }}
                          >
                            Delete
                          </button>

                          <button>
                            <Link to={`/data/sale/${id}`}>Update</Link>
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default SaleTable;
