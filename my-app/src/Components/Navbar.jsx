import React from 'react'
import "./Navbar.css";
import styled from 'styled-components'
import Search from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingBasket from '@mui/icons-material/ShoppingBasketOutlined';

const First = styled.div``
const Launguage = styled.span``
const SearchContainer = styled.div``
const Input = styled.input``
const Second = styled.div``
const Logo = styled.h1``
const Third = styled.div``
const MenuItem = styled.div``

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <First className='navbar-elements-first'>
            <Launguage className='navbar-language'>HU</Launguage>
            <SearchContainer className='navbar-searchcontainer'>
                <Input className='navbar-input'/>
                <Search style={{color:"gray", fontSize:15}}/>
            </SearchContainer>
        </First>
        <Second className='navbar-elements-second'><Logo>LgAdam Wines</Logo></Second>
        <Third className='navbar-elements-third'>
            <MenuItem className='navbar-third-items'>Regisztráció</MenuItem>
            <MenuItem className='navbar-third-items'>Bejelentkezés</MenuItem>
            <MenuItem className='navbar-third-items'>
                <Badge color="primary">
                    <ShoppingBasket/>
                </Badge>
            </MenuItem>

        </Third>
      </div>
    </div>
  )
}

export default Navbar
