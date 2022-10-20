import styled from "styled-components"
import "../Components/Slider.css";

const Success = () => {

  const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 40%;
    padding: 20px;
    background-color: white;
  `
  const Button = styled.button``

  return (
    <Container>
      <Button className="btn-slider">Vissza a főoldalra</Button>
    </Container>
  )
}

export default Success
