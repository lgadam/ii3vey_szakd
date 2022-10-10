import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'
import "../Components/Slider.css"
import Delete from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import "../Components/Slider.css"
import { mobile } from "../responsive"
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE_KEY;

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    text-align: center;
` 
const Begin = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
`
const BeginTexts = styled.div`
    ${mobile({ display: "none" })}
`
const BeginTxt = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const BeginBtn = styled.button``
const End = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Information = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 15px;
    padding: 20px;
    height: 50vh;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductData = styled.div`
    flex: 2;
    display: flex;
`
const PriceData = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Datas = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductType = styled.span``
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    ${mobile({ flexDirection: "column" })}
`
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
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const SummaryTitle = styled.h1``
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.type === "total" && "22px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button``
const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const cart = useSelector(state=>state.cart);
  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeRequest = async ()=>{
        try{
            const res = await userRequest.post("/checkout/payment",{
                tokenId:stripeToken.id,
                amount:cart.total*100, 
            });
            navigate("/success", { state: { stripeData: res.data, products: cart} });
        } catch{

        }
    };
    stripeToken && makeRequest();
  },[stripeToken, cart, cart.total, navigate]);
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Kosár</Title>
            <Begin>
                <BeginBtn className='btn-slider'>Vásárlás folytatása...</BeginBtn>
                <BeginTexts>
                <BeginTxt>Kosár tartalma(1)</BeginTxt>
                <BeginTxt>Kívánságkosár(1)</BeginTxt>
                </BeginTexts>
            </Begin>
            <End>
                <Information>
                    {cart.products.map(product=>(
                    <Product key={product._id}>
                        <ProductData>
                            <Image src={product.image}/>
                            <Datas>
                                <ProductName><b>Termék:</b>{product.title}</ProductName>
                                <ProductId><b>Azonosító:</b>{product._id}</ProductId>
                                <ProductType><b>Fajta:</b>{product.type}</ProductType>  
                            </Datas>
                        </ProductData>
                        <PriceData>
                            <ProductAmountContainer>
                                <Delete />
                                <Amount>{product.quantity}</Amount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>{product.price*product.quantity} ft</ProductPrice>
                        </PriceData>
                    </Product>))};
                    <Hr/>
                </Information>
                <Summary>
                    <SummaryTitle>Rendelés áttekintés</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Részösszeg:</SummaryItemText>
                        <SummaryItemPrice>{cart.total} ft</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Szállítási költség:</SummaryItemText>
                        <SummaryItemPrice>Ingyenes</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Összesen fizetendő:</SummaryItemText>
                        <SummaryItemPrice>{cart.total} ft</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="LgAdam Wines"
                        billingAddress
                        shippingAddress
                        description={`A fizetendő összeg ${cart.total}Ft`}
                        amount={cart.total * 100}
                        currency="HUF"
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button className="btn-slider">Fizetés</Button>
                    </StripeCheckout>
                </Summary>
            </End>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
