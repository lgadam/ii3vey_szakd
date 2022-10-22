import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import "./UserList.css";

const Container = styled.div`
    flex: 4;
`

const UserListEdit = styled.button``

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
        <UserListEdit className="userListEdit">Szerkesztés</UserListEdit>
        <DeleteIcon className="userListDelete"/>
      </>
      )
    }
  },
];

const rows = [
  { id: 1, username: 'LgAdam', email:"lgadam@gmail.com",status:"aktív",transaction:"2400Ft",},
  { id: 2, username: 'LgAdam12', email:"lgadam12@gmail.com",status:"aktív",transaction:"2400Ft",},
  { id: 3, username: 'LgAdam34', email:"lgadam34@gmail.com",status:"aktív",transaction:"2400Ft",},
  { id: 4, username: 'LgAdam67', email:"lgadam67@gmail.com",status:"aktív",transaction:"2400Ft",},
];


export default function UserList() {
  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  )
}
