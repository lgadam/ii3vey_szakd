import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import "./UserList.css";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    flex: 4;
`

const UserListEdit = styled.button``

export default function UserList() {

  const [data,setData] = useState(userRows);

  const handleDelete = (id) =>{
    setData(data.filter(item=>item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Felhasználónév', width: 200 },
    { field: 'email', headerName: 'Email cím', width: 200 },
    {
      field: 'status',
      headerName: 'Státusz',
      type: 'number',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Tranzakció',
      type: 'number',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Műveletek',
      width: 150,
      renderCell: (params)=>{
        return(
        <>
          <Link to={"/user/"+params.row.id}>
          <UserListEdit className="userListEdit">Szerkesztés</UserListEdit>
          </Link>
          <DeleteIcon className="userListDelete"onClick={()=>handleDelete(params.row.id)}/>
        </>
        )
      }
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
