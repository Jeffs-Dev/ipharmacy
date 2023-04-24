import { useContext } from 'react'
import { DataApiContext } from '../../../context/DataApi';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductTable = () => {
    
    const { product, category, deleteRegister } = useContext(DataApiContext);

  return (
    <>

{product !== undefined && category !== undefined ? (
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
                let categoryDescription = category.find((item) => item.id === row.category);
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{categoryDescription.description}</TableCell>
                    <TableCell align="center">
                      <div className="action">
                        <button
                          onClick={() => {
                            deleteRegister("product", row.id);
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



    </>
  )
}

export default ProductTable;