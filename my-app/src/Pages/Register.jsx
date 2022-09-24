import styled from "styled-components"
import "../Components/Slider.css"

const Container = styled.div``
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
