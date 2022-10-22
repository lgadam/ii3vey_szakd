import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProductList.css";

const Container = styled.div`
    flex:4;
`

export default function ProductList() {
    const [data,setData] = useState(productRows);

    const handleDelete = (id) =>{
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Termék",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.image} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Készlet", width: 200 },
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
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </Container>
  )
}
