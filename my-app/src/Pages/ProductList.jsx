import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Products from "../Components/Products"
import GuideMail from "../Components/GuideMail"
import Footer from "../Components/Footer"
const Container = styled.div`

`
const Title = styled.h1`
    margin: 30px;
`
const FilterBar = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 30px;
`
const FilterSearch = styled.span`
    font-size: 18px;
    font-weight: 400;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Termékek</Title>
        <FilterBar>
            <Filter>
                <FilterSearch>Keresés a termékekre</FilterSearch>
            </Filter>
            <Filter>
                <FilterSearch>Rendezés..</FilterSearch>
            </Filter>
        </FilterBar>
        <Products/>
        <GuideMail/>
        <Footer/>
    </Container>
  )
}

export default ProductList
