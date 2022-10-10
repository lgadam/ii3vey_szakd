import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Products from "../Components/Products"
import GuideMail from "../Components/GuideMail"
import Footer from "../Components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import logo from '../Components/logo_szakdoga.PNG';

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
    ${mobile({ width: "0px 20px", display:"flex",flexDirection:"column" })}
`
const FilterSearch = styled.span`
    font-size: 18px;
    font-weight: 400;
    margin-right: 20px;
    ${mobile({ marginRight:"0px"})}
`
const Select = styled.select`
    padding: 12px;
    margin-right: 20px;
    border: 1px solid #24d684;
    ${mobile({ margin:"10px 0px"})}
`
const Option = styled.option`

`
const LogoContainer = styled.div`
    padding: 40px 0px;
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #e9fbf3;
`
const Logo = styled.img`
    width: 200px;
    height: 200px;
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort,setSort] = useState("newest");
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
        <Announcement />
        <Navbar />
        <LogoContainer><Logo img src={logo} /></LogoContainer>
        <Title>{cat}</Title>
        <FilterBar>
            <Filter>
            <FilterSearch>Fajták:</FilterSearch>
                <Select name="type" onChange={handleFilters}>
                    <Option>edes</Option>
                    <Option>szaraz</Option>
                    <Option>feledes</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterSearch>Rendezés..</FilterSearch>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Új termékek</Option>
                    <Option value="desc">Ár (csökkenő)</Option>
                    <Option value="asc">Ár (növekvő)</Option>
                </Select>
            </Filter>
        </FilterBar>
        <Products cat={cat} sort={sort} filters={filters} />
        <GuideMail/>
        <Footer/>
    </Container>
  )
}

export default ProductList
