import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import "./UserList.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, getClients } from "../redux/apiCalls";

const Container = styled.div`
    flex: 4;
`

const UserListEdit = styled.button``

export default function UserList() {
  const dispatch = useDispatch();
  const clients = useSelector(state=>state.client.users);


  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  const handleDelete = (id) =>{
    deleteClient(id, dispatch);    
  };
  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'username', headerName: 'Felhasználónév', width: 200 },
    { field: 'email', headerName: 'Email cím', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Admin státusz',
      width: 130,
    },
    {
      field: 'createdAt',
      headerName: 'Létrehozás időpontja',
      width: 165,
    },
    {
      field: 'action',
      headerName: 'Műveletek',
      width: 150,
      renderCell: (params)=>{
        return(
        <>
          <Link to={"/user/"+params.row._id}>
          <UserListEdit className="userListEdit">Szerkesztés</UserListEdit>
          </Link>
          <DeleteIcon className="userListDelete"onClick={()=>handleDelete(params.row._id)}/>
        </>
        )
      }
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        disableSelectionOnClick
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </Container>
  )
}
