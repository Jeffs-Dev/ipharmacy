import { useContext } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

const BudgetTable = () => {

    const {budget, deleteRegister} = useContext(DataApiContext);



  return (
    <>

    {budget !== undefined ? (
        <>
        <TableContainer component={Paper}>
        <Table>
        <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center"> Client </TableCell>
                <TableCell align="center"> Seller </TableCell>
                <TableCell align="center"> Products </TableCell>
                <TableCell align="center"> Amount </TableCell>
      
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {budget.map((row) => {
                
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.client}</TableCell>
                    <TableCell align="center">{row.seller}</TableCell>
                    <TableCell align="center">Products</TableCell>
                    <TableCell align="center">{`R$ ${row.amount}`}</TableCell>
             
               
                    <TableCell align="center">
                      <div className="action">
                        <button
                          onClick={() => {
                            deleteRegister("budget", row.id);
                          }}
                        >
                          Delete
                        </button>

                        <button>
                          <Link to={`/data/budget/${row.id}`}>Update</Link>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

        </Table>


        </TableContainer>
        </>
    ) : ''}

    </>
  )
}

export default BudgetTable;