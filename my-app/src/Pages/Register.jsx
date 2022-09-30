import styled from "styled-components"
import "../Components/Slider.css"
import register_bg from '../register_bg1.jpg';
import { mobile } from "../responsive"

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
window.onscroll = () => { window.scroll(0, 0); };
document.body.style.overflow = "hidden";
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Regisztráció</Title>
            <Form>
                <Input placeholder="felhasználónév" />
                <Input placeholder="keresztnév" />
                <Input placeholder="vezetéknév" />
                <Input placeholder="email cím" />
                <Input placeholder="jelszó" />
                <Input placeholder="jelszó újra" />
                <Button className="btn-slider">Felhasználó létrehozása</Button>
                <Privacy>A létrehozás során a felhasználónak elkell fogadni a szabályzatot. <b>Szabályzat</b></Privacy>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
