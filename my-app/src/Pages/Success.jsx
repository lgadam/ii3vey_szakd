import styled from "styled-components"
import "../Components/Slider.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from 'react-router-dom';
import success_bg from '../register_bg1.jpg';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    background: linear-gradient(
        rgba(86, 67, 67, 0.5),
        rgba(86, 67, 67, 0.5)
    ),
    url(${success_bg});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  `

const Wrapper = styled.div`
    height: 250px;
    width: 300px;
    padding: 20px;
    background-color: white;
`

const ButtonContainer = styled.div`

`
const Button = styled.button`
`
const OrderContainer = styled.div`
  margin-bottom: 60px;
`
const Order = styled.span`
  font-size: 36px;
  font-weight: 700;
`

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res?.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, data._id, currentUser]);
  return (
    <Container>
      <Wrapper>
        <OrderContainer>
        {orderId
        ? <Order>Rendelés elkészült a következő azonosítóval ${orderId}</Order>
        : <Order>A rendelésed elkészült</Order>}
        </OrderContainer>
        <ButtonContainer>
        <Link to="/">
          <Button className="btn-slider">Vissza a főoldalra</Button>
        </Link>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default Success
