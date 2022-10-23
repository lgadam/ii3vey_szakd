import styled from "styled-components"
import "./Login.css";

const Container = styled.div``

const Wrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    width: 25%;
    padding: 20px;
    background-color: white;
`

const LoginInput = styled.input``

const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Adminpanel bejelentkezés</Title>
            <LoginInput type="text" placeholder="felhasználónév" />
            <LoginInput type="password" placeholder="jelszó" />
            <Button className="btn-login">Belépés</Button>
        </Wrapper>
    </Container>
  )
}

export default Login
