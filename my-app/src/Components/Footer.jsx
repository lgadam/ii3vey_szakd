import styled from "styled-components"
import logo from './logo_szakdoga.PNG';
import Facebook from '@mui/icons-material/Facebook';
import Insta from '@mui/icons-material/Instagram';

const Container = styled.div`
    display: flex;
`
const First = styled.div`
    flex: 1;
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Second = styled.div`
    flex: 1;
    padding: 20px;
`
const Third = styled.div`
    flex: 1;
    padding: 20px;
`
const Image = styled.img`
    width: 150px;
    height: 150px;
`
const MediaContainer = styled.div`
    display: flex;
`
const MediaIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #1a995d;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Description = styled.p`

`
const ListH = styled.h2`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Footer = () => {
  return (
    <Container>
        <First>
            <Image src={logo}/>
            <MediaContainer>
                <MediaIcon>
                    <Facebook/>
                </MediaIcon>
                <MediaIcon>
                    <Insta/>
                </MediaIcon>
            </MediaContainer>
            <Description>Csatlakozzon hozzánk! Rengeteg új információt kaphat újdosnságainkról, bővülő kínálatunkról akár a közösségi oldalakon is!</Description>
        </First>
        <Second>
            <ListH>Linkek:</ListH>
            <List>
            <ListItem>Főoldal</ListItem>
            <ListItem>Kosár</ListItem>
            <ListItem>Fehér borok</ListItem>
            <ListItem>Vörös borok</ListItem>
            <ListItem>Rozé borok</ListItem>
            <ListItem>Felhasználói fiók</ListItem>
            <ListItem>Rendelések</ListItem>
            <ListItem>Kiemelt időszakok</ListItem>
            </List>
        </Second>
        <Third>
            <ListH>Elérhetőségek:</ListH>
        </Third>
    </Container>
  )
}

export default Footer
