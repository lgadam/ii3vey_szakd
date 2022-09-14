import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import GuideMail from "../Components/GuideMail"
import Navbar from "../Components/Navbar"
import bor1 from '../bor1.jpg';
const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 24px;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h2`
    font-weight: 300;
`

const Description = styled.p`
    margin: 20px 0px;
`

const Cost = styled.span`
    font-weight: 200;
    font-size: 40px;
`

const Wine = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={bor1}/>
            </ImageContainer>
            <InformationContainer>
                <Title>Lafi Fruit</Title>
                <Description>Ez egy teszt szöveg... ide kerül a leírás</Description>
                <Cost>1200 Ft</Cost>
            </InformationContainer>
        </Wrapper>
        <GuideMail/>
        <Footer/>
    </Container>
  )
}

export default Wine
