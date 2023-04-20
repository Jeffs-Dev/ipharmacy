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

const CategoryTable = () => {
  const { category, deleteRegister } = useContext(DataApiContext);


  return (
    <>
      {category !== undefined ? (
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
                          <Link to={`/data/category/${id}`}> Update </Link>
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

export default CategoryTable;
