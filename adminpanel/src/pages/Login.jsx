import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";
import "./Login.css";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 400px;
`

const Wrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    width: 25%;
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-wrap: wrap;
`

const LoginInput = styled.input`
    margin-right: 5px;
    padding: 5px;
    border: 1px solid darkgray;
`

const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
`
const Button = styled.button`
    margin-top: 10px;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  document.body.style.overflow = "hidden";
  return (
    <Container>
        <Wrapper>
            <Title>Adminpanel bejelentkezés</Title>
            <LoginInput type="text" placeholder="felhasználónév" onChange={e=>setUsername(e.target.value)}/>
            <LoginInput type="password" placeholder="jelszó" onChange={e=>setPassword(e.target.value)}/>
            <Button className="btn-login" onClick={handleClick}>Belépés</Button>
        </Wrapper>
    </Container>
  )
}

export default Login
