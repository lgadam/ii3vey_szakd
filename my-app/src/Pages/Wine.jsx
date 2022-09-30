import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import GuideMail from "../Components/GuideMail"
import Navbar from "../Components/Navbar"
import bor1 from '../bor1.jpg';
import Delete from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import "../Components/Slider.css"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    padding: 24px;
    ${mobile({ padding: "10px",flexDirection:"column"})}
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
    ${mobile({ height:"350px"})}
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding:"10px"})}
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
const AddContainer = styled.div``

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({ width:"100%"})}
`

const Button = styled.button``

const Amount = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 12px;
    border: 1px solid #1a995d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
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
            <AddContainer>
                <AmountContainer>
                    <Delete />
                    <Amount>0</Amount>
                    <Add />
                    <Button className="btn-slider">Kosárba helyezés</Button>
                </AmountContainer>
            </AddContainer>
            </InformationContainer>
        </Wrapper>
        <GuideMail/>
        <Footer/>
    </Container>
  )
}

export default Wine
