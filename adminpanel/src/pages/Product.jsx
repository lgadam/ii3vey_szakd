import styled from "styled-components"
import { Link } from "react-router-dom";
import Charts from "../components/Charts";
import {productData} from "../dummyData";

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
`
const ProductTop = styled.div`

`

const ProductBottom = styled.div``

const ProductTopLeft = styled.div``

const ProductTopRight = styled.div``

const ProductInfoTop = styled.div``

const ProductInfoBottom = styled.div``

export default function Product() {
  return (
    <Container>
        <TitleContainer>
            <Title>Termék</Title>
            <Link to="/addProduct">
                <AddButton>Hozzáadás</AddButton>
            </Link>
        </TitleContainer>
        <ProductTop>
            <ProductTopLeft>
                <Charts data={productData} dataKey="Sales" title="Eladások lebontva"/>
            </ProductTopLeft>
            <ProductTopRight>
                <ProductInfoTop></ProductInfoTop>
                <ProductInfoBottom></ProductInfoBottom>
            </ProductTopRight>
        </ProductTop>
        <ProductBottom>

        </ProductBottom>
    </Container>
  )
}
