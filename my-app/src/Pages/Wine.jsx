import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import GuideMail from "../Components/GuideMail"
import Navbar from "../Components/Navbar"
import Delete from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import "../Components/Slider.css"
import { mobile } from "../responsive"
import {useLocation} from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProuduct] = useState({});
  const [quantity,setQuantity] = useState(1);
  const type = product.type;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getProduct = async () =>{
     try{
        const res = await publicRequest.get("/products/find/"+id);
        setProuduct(res.data);
     } catch{

     } 
    };
    getProduct();
  },[id]);

  const handleQuantity = (type) => {
    if(type === "del"){
        quantity > 1 && setQuantity(quantity-1);
    } else{
        quantity < 100 && setQuantity(quantity+1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, type })
    );
  };

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.image}/>
            </ImageContainer>
            <InformationContainer>
                <Title>{product.title}</Title>
                <Description>{product.description} Fajta: {product.type}</Description>
                <Cost>{product.price} Ft</Cost>
            <AddContainer>
                <AmountContainer>
                    <Delete onClick={()=>handleQuantity("del")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("add")}/>
                    <Button className="btn-slider" onClick={handleClick}>Kosárba helyezés</Button>
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
