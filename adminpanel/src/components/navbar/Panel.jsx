import React from 'react'
import styled from "styled-components"
import logo from '../navbar/panel_logo.PNG';
import FeedbackIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

const TopPanel = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
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
const IconContainer = styled.div`
  margin-right: 10px;
  cursor: pointer;
  position: relative;
  color: #666666;
`
const FeedbackBadge = styled.span`
  font-size: 11px;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 2px;
  background-color: #1a995d;
  color:white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserPicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export default function Panel() {
  return (
    <TopPanel>
      <Wrapper>
        <Left>
          <Logo>Adminpanel</Logo>
        </Left>
        <Right>
          <IconContainer>
            <FeedbackIcon />
            <FeedbackBadge>1</FeedbackBadge>
          </IconContainer>
          <IconContainer>
            <SettingsIcon />
          </IconContainer>
          <UserPicture img src={logo}/>
        </Right>
      </Wrapper>
    </TopPanel>
  )
}
