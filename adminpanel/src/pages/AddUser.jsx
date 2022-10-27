import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addClient } from "../redux/apiCalls";
import CryptoJS from 'crypto-js'

const Container = styled.div`
    flex: 4;
`
const AddUserTitle = styled.h1``

const AddUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const AddUserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 20px;
`

const AddUserLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #4444;
`

const AddUserInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const AddUserButton = styled.button`
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: none;
    background-color: #6fdcab;
    border-radius: 10px;
    padding: 5px 10px;
`

export default function AddUser() {
  const [inputs, setInputs] = useState({});
  const [password, setPassword] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }; 
  const handleClick = (e) => {
    e.preventDefault();
    const pwd = CryptoJS.AES.encrypt(password, "lgadamaesdecryptkey1").toString();
    const users = { ...inputs, password: pwd };
    addClient(users, dispatch);
  };
  return (
    <Container>
        <AddUserTitle>Felhasználó létrehozása</AddUserTitle>
        <AddUserForm>
            <AddUserItem>
                <AddUserLabel>Felhasználónév</AddUserLabel>
                <AddUserInput name="username" type="text" placeholder="felhasználónév" onChange={handleChange}></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Email</AddUserLabel>
                <AddUserInput name="email" type="text" placeholder="email" onChange={handleChange}></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Jelszó</AddUserLabel>
                <AddUserInput name="password" type="password" placeholder="jelszó" onChange={handlePassword}></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Admin</AddUserLabel>
                <AddUserInput name="isAdmin" type="isAdmin" placeholder="true,false" onChange={handleChange}></AddUserInput>
                <AddUserButton onClick={handleClick}>Hozzáadás</AddUserButton>
            </AddUserItem>
        </AddUserForm>
    </Container>
  )
}
