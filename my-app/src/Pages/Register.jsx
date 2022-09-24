import styled from "styled-components"
import "../Components/Slider.css"
import register_bg from '../register_bg1.jpg';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(86, 67, 67, 0.5),
        rgba(86, 67, 67, 0.5)
    ),
    url(${register_bg});
`
const Wrapper = styled.div``
const Privacy = styled.span``
const Title = styled.h1``
const Form = styled.form``
const Button = styled.button``
const Input = styled.input``
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
                <Privacy>A létrehozás során a felhasználónak elkell fogadni a szabályzatot. <italy>Szabályzat</italy></Privacy>
                <Button className="btn-slider">Felhasználó létrehozása</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
