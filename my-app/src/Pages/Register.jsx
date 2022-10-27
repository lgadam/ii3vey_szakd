import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import "../Components/Slider.css"
import register_bg from '../register_bg1.jpg';
import { mobile } from "../responsive"
import CryptoJS from 'crypto-js'
import { addSignup } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(86, 67, 67, 0.5),
        rgba(86, 67, 67, 0.5)
    ),
    url(${register_bg});
    background-size: cover;
    display: flex;
    text-align: center;
    justify-content: center;
`
const Wrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Privacy = styled.span`
    font-size: 12px;
    margin: 20px 20px;
`
const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Button = styled.button`
    margin: 20px 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 8px;
`

const Error = styled.span`
    padding-top: 5px;
    color:red;
`

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [email,setEmail] = useState({});
  const [password, setPassword] = useState([]);
  const [passwordConf, setPasswordConf] = useState([]);
  const [error, setError] = useState([]);
  const isAdmin = "false";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
  setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConf = (e) => {
    setPasswordConf(e.target.value);
  };  
  const handleClick = (e) => {
    e.preventDefault();
    if(password !== passwordConf){
        setError("A két jelszó nem egyezik");
    } else if(!email.includes("@")){
        setError("Valótlan email");
    } else if(password.length < 8 && passwordConf.length < 8){
        setError("A jelszónak legalább 8 karakternek kell lennie");
    } else{
        const pwd = CryptoJS.AES.encrypt(password, "lgadamaesdecryptkey1").toString();
        const users = { ...inputs, password: pwd, isAdmin:isAdmin, email:email };
        addSignup(users, dispatch);
        navigate("/login");
    }
  };
  return (
    <Container>
        <Wrapper>
            <Title>Regisztráció</Title>
            <Form>
                <Input name="username" placeholder="felhasználónév" onChange={handleChange}/>
                <Input name="email" placeholder="email cím" onChange={handleEmail}/>
                <Input name="password" placeholder="jelszó" type="password" onChange={handlePassword}/>
                <Input name="passwordConf" placeholder="jelszó újra" type="password" onChange={handlePasswordConf}/>
                <Button className="btn-slider" onClick={handleClick}>Felhasználó létrehozása</Button>
                <Privacy>A létrehozás során a felhasználónak elkell fogadni a szabályzatot. <b>Szabályzat</b></Privacy>
                <Error>{error}</Error>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register