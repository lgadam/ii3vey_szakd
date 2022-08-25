import styled from "styled-components"
import { advantagedProducts } from "../data"
import ProductItem from "./ProductItem"
const Container = styled.div`
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
        {advantagedProducts.map(item=>(
            <ProductItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
