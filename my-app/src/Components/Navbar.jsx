import React from 'react'
import "./Navbar.css";
import styled from 'styled-components'
import Search from '@mui/icons-material/SearchOutlined';

const First = styled.div``
const Launguage = styled.span``
const SearchContainer = styled.div``
const Input = styled.input``
const Second = styled.div``
const Logo = styled.h1``
const Third = styled.div``

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <First className='navbar-elements-first'>
            <Launguage className='navbar-language'>HU</Launguage>
            <SearchContainer className='navbar-searchcontainer'>
                <Input className='navbar-input'/>
                <Search/>
            </SearchContainer>
        </First>
        <Second className='navbar-elements-second'><Logo>LgAdam Wines</Logo></Second>
        <Third className='navbar-elements-third'>Harmadik</Third>
      </div>
    </div>
  )
}

export default Navbar
