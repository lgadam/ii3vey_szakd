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
    margin-right: 20px;
`
const Select = styled.select`
    padding: 12px;
    margin-right: 20px;
    border: 1px solid #24d684;
`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Termékek</Title>
        <FilterBar>
            <Filter>
                <FilterSearch>Keresés a termékekre..</FilterSearch>
                <Select>
                    <Option disabled selected>
                        Borok
                    </Option>
                    <Option>Sauvignon</Option>
                    <Option>Bikavér</Option>
                    <Option>Porto</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterSearch>Rendezés..</FilterSearch>
                <Select>
                    <Option selected>Új termékek</Option>
                    <Option>Ár (csökkenő)</Option>
                    <Option>Ár (növekvő)</Option>
                </Select>
            </Filter>
        </FilterBar>
        <Products/>
        <GuideMail/>
        <Footer/>
    </Container>
  )
}

export default ProductList
