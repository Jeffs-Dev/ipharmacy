import { useContext } from "react";
import { DataApiContext } from "../../../context/DataApi";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

const BudgetTable = () => {

    const {budget, deleteRegister, seller, client} = useContext(DataApiContext);

  



  return (
    <>

    {budget !== undefined && seller !== undefined && client !== undefined ? (
        <>
        <TableContainer component={Paper}>
        <Table>
        <TableHead>
              <TableRow>
                <TableCell align="center"> ID </TableCell>
                <TableCell align="center"> Client </TableCell>
                <TableCell align="center"> Seller </TableCell>
                <TableCell align="center"> N° of products </TableCell>
                <TableCell align="center"> Amount </TableCell>
      
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {budget.map((row) => {

                let sellerPerson = seller.find((seller) => seller.id === row.seller);
                
                let clientPerson = client.find((client) => client.id === row.client);



                
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{clientPerson.name}</TableCell>
                    <TableCell align="center">{sellerPerson.name}</TableCell>
                    <TableCell align="center"> {row.product.length}</TableCell>
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