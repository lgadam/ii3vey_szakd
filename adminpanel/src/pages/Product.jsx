import styled from "styled-components"
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    flex: 4;
    padding: 20px;

`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1``

const AddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: #6fdcab;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 300px;
`
const ProductTop = styled.div`
    display: flex;
    width: 700px;
    height: 450px;
`

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-right: 20px;
    width: 200px;

`

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`

const ProductInfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const ProductInfoName = styled.span`
    font-weight: 600;
`

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ProductInfoKey = styled.span``

const ProductInfoValue = styled.span`
    font-weight: 400;
`

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    ); 
  return (
    <Container>
        <TitleContainer>
            <Title>Termék</Title>
        </TitleContainer>
        <ProductTop>
            <ProductTopRight>
                <ProductInfoTop>
                    <ProductInfoImg img src={product.image}/>
                    <ProductInfoName>{product.title}</ProductInfoName>
                    <Link to="/addProduct">
                        <AddButton>Hozzáadás</AddButton>
                    </Link>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <ProductInfoItem>
                        <ProductInfoKey>Id:</ProductInfoKey>
                        <ProductInfoValue>{product._id}</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Típus:</ProductInfoKey>
                        <ProductInfoValue>{product.type}</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Kategória:</ProductInfoKey>
                        <ProductInfoValue>{product.categories}</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Készleten:</ProductInfoKey>
                        <ProductInfoValue>{product.inStock ? "Igen": "Nem"}</ProductInfoValue>
                    </ProductInfoItem>
                </ProductInfoBottom>
            </ProductTopRight>
        </ProductTop>
    </Container>
  )
}
