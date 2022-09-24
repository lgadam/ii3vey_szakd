import styled from "styled-components"
import "../Components/Slider.css"
import register_bg from '../register_bg1.jpg';

const Container = styled.div``
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
                <Link>Ha még nincs fiókod, itt regisztrálhatsz</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
