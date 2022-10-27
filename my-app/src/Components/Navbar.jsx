import React from 'react'
import "./Navbar.css";
import styled from 'styled-components'
import Search from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingBasket from '@mui/icons-material/ShoppingBasketOutlined';
import { mobile } from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../redux/apiCalls";
import { useDispatch } from 'react-redux';

const Container = styled.div`
  ${mobile({ height: "50px" })}
  ${mobile({ paddingBottom: "50px" })}
`
const Wrapper = styled.div`
  ${mobile({ padding: "10px 0px" })}
`
const First = styled.div``
const Launguage = styled.span`
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div``
const Input = styled.input`
  ${mobile({ width: "50px" })}
`
const Second = styled.div`
  ${mobile({ flex:2, justifyContent: "center" })}
`
const Logo = styled.h1`
  ${mobile({ fontSize: "18px" })}
  ${mobile({ paddingLeft: "5px" })}
`
const Third = styled.div``
const MenuItem = styled.div`
  cursor:pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state=>state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return (
    <Container className='navbar-container'>
      <Wrapper className='navbar-wrapper'>
        <First className='navbar-elements-first'>
            <Launguage className='navbar-language'>HU</Launguage>
            <SearchContainer className='navbar-searchcontainer'>
                <Input className='navbar-input' placeholder="Keresés"/>
                <Search style={{color:"gray", fontSize:15}}/>
            </SearchContainer>
        </First>
        <Second className='navbar-elements-second'><Logo>LgAdam Wines</Logo></Second>
        <Third className='navbar-elements-third'>
            <Link to="/register" className='navbar-link'>
            <MenuItem className='navbar-third-items'>Regisztráció</MenuItem>
            </Link>
            <Link to="/login" className='navbar-link'>
            <MenuItem className='navbar-third-items'>Bejelentkezés</MenuItem>
            </Link>
            {user && <MenuItem className='navbar-third-items' onClick={handleClick}>Kijelentkezés</MenuItem>}
            <Link to="/cart">
              <MenuItem className='navbar-third-items'>
                  <Badge badgeContent={quantity} color="success">
                      <ShoppingBasket className='navbar-link'/>
                  </Badge>
              </MenuItem>
            </Link>
        </Third>
      </Wrapper>
    </Container>
  )
}

export default Navbar
