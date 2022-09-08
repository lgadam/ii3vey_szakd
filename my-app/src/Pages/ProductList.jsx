import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
const Container = styled.div`

`
const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
    </Container>
  )
}

export default ProductList
