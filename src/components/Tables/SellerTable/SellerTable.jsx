import { useContext } from 'react'
import { DataApiContext } from '../../../context/DataApi';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const SellerTable = () => {

    const { seller, deleteRegister } = useContext(DataApiContext);


  return (
    <>

{seller !== undefined ? (
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

    </>
  )
}

export default SellerTable;