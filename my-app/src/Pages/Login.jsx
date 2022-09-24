import styled from "styled-components"
import "../Components/Slider.css"
import login_bg from '../register_bg1.jpg';

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
    height: 40%;
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Link = styled.a`
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
const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>Bejelentkezés</Title>
            <Form>
                <Input placeholder="felhasználónév" />
                <Input placeholder="jelszó" />
                <Button className="btn-slider">Belépés</Button>
                <Link>Elfelejtetted a jelszavad? itt kérhetsz emlékeztetőt</Link>
                <Link>Ha még nincs felhasználód, regisztrálj itt</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
