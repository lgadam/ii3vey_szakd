import { useState } from "react";
import styled from "styled-components"
import "../Components/Slider.css"
import { login } from "../redux/apiCalls";
import login_bg from '../register_bg1.jpg';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(86, 67, 67, 0.5),
        rgba(86, 67, 67, 0.5)
    ),
    url(${login_bg});
    background-size: cover;
    display: flex;
    text-align: center;
    justify-content: center;
`
const Wrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    margin: 20px 20px;
    &:disabled{
        cursor: wait;
    }
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px 0px 0px;
    padding: 8px;
`
const Error = styled.span`
    padding-top: 5px;
    color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username, password});
  }
  return (
    <Container>
      <Wrapper>
            <Title>Bejelentkezés</Title>
            <Form>
                <Input placeholder="felhasználónév" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="jelszó" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button className="btn-slider" onClick={handleClick} disabled={isFetching}>Belépés</Button>
                { error && <Error>Hiba történt a bejelentkezés során..</Error>}
                <Link>Elfelejtetted a jelszavad? itt kérhetsz emlékeztetőt</Link>
                <Link>Ha még nincs felhasználód, regisztrálj itt</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
