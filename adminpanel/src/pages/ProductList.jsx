import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductList.css";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";

const Container = styled.div`
    flex:4;
`

export default function ProductList() {
    const [data,setData] = useState(productRows);
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.products);
    
    useEffect(() => {
      getProducts(dispatch);
    }, [dispatch]);

    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !== id));
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
          field: "status",
          headerName: "Státusz",
          width: 120,
        },
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
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Szerkesztés</button>
                </Link>
                <DeleteIcon
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
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
