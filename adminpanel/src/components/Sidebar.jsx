import styled from "styled-components"
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SellIcon from '@mui/icons-material/Sell';
import PeopleIcon from '@mui/icons-material/People';
import WineBarIcon from '@mui/icons-material/WineBar';
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    position: sticky;
    background-color: #80f4bf;
    top:50px;
`
const Wrapper = styled.div`
    padding: 20px;
    color:#666666; 
    background-color: #80f4bf;
    margin-bottom: 10px;
`

const Menu = styled.div`
    margin-bottom: 20px;
`

const Title = styled.h3`
    font-size: 15px;
    font-weight: 700;
`

const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const SecondList = styled.ul`
    list-style: none;
    padding: 5px;
`
const ListItem = styled.li`
    &:hover{
        background-color: #44d594;
    }
    padding-bottom: 5px;
    width: 100%;
`

export default function Sidebar() {
  return (
    <SideBar>
      <Wrapper>
        <Menu>
          <Title>Kimutatások</Title>
          <List>
            <Link to="/" className="link">
            <ListItem className="listItem active">
                <HomeIcon className="listItemIcon"/>
                Főoldal
            </ListItem>
            </Link>
            <ListItem className="listItem">
                <EqualizerIcon className="listItemIcon"/>
                Statisztika
            </ListItem>
            <ListItem className="listItem">
                <SellIcon className="listItemIcon"/>
                Eladások
            </ListItem>
          </List>
          <Title>Menü</Title>
          <SecondList>
            <Link to="/users" className="link">
                <ListItem className="listItem">
                    <PeopleIcon className="listItemIcon"/>
                    Felhasználók
                </ListItem>
            </Link>
            <Link to="/products" className="link">
                <ListItem className="listItem">
                    <WineBarIcon className="listItemIcon"/>
                    Termékek
                </ListItem>
            </Link>
          </SecondList>
        </Menu>
      </Wrapper>
    </SideBar>
  )
}
