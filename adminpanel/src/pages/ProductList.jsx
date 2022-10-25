import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./ProductList.css";
import { useDispatch,useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/apiCalls";

const Container = styled.div`
    flex:4;
`

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.products);
    
    useEffect(() => {
      getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) =>{
      deleteProduct(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 210 },
        {
          field: "product",
          headerName: "Termék",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.image} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "inStock", headerName: "Készlet", width: 200 },
        {
          field: "price",
          headerName: "Ár",
          width: 160,
        },
        {
          field: "action",
          headerName: "Művelet",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Szerkesztés</button>
                </Link>
                <DeleteIcon
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];
    return (
    <Container>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </Container>
  )
}
