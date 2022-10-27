import React from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/apiCalls';
import { Link } from "react-router-dom";
import "./Panel.css";

const TopPanel = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  
`
const Right = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.span`
  font-size: 18px;
  color:#1a995d;
  font-weight: 600;
  cursor: pointer;
`

const UserLogout = styled.span`
  background-color: #1a995d;
  padding: 10px;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
`

export default function Panel() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return (
    <TopPanel>
      <Wrapper>
        <Left>
          <Logo>Adminpanel</Logo>
        </Left>
        <Right>
          <UserLogout onClick={handleClick}><Link to="/" className="linkLogout">Kijelentkezés</Link></UserLogout>
        </Right>
      </Wrapper>
    </TopPanel>
  )
}
