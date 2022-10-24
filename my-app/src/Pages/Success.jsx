import styled from "styled-components"
import "../Components/Slider.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: white;
    display: flex;
  `

const Wrapper = styled.div`
    padding: 20px;
    background-color: white;
    align-items: center;
    justify-content: center;
`
const Button = styled.button``

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
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, data._id, currentUser]);
  return (
    <Container>
      <Wrapper>
      {orderId
        ? `Rendelés elkészült a következő azonosítóval ${orderId}`
        : `A rendelés elkészült`}
        <Link to="/">
          <Button className="btn-slider">Vissza a főoldalra</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Success
