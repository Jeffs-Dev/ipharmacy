import { useContext } from 'react'
import { DataApiContext } from '../../../context/DataApi';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const ClientTable = () => {

    const { client, deleteRegister } = useContext(DataApiContext);



  return (
    <>


{client !== undefined ? (
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
    </>
  )
}

export default ClientTable;