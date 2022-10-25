import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    flex: 4;
    padding: 20px;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1``

const AddButton = styled.button`
    width: 80px;
    font-size: 14px;
    border: none;
    background-color: #6fdcab;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 300px;
`

const UserContainer = styled.div`
    display: flex;
    width: 600px;
`

const UserDisplay = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-right: 20px;
`

const UserDisplayTop = styled.div`
    display: flex;
    align-items: center;
`

const UserDisplayBottom = styled.div``

const DisplayTopTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const DisplayTopUsername = styled.span`
    font-weight: 700;
`

const DisplayInfoTitle = styled.span`
    margin-left: 10px;

`

const DisplayInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`

export default function User() {
    const location = useLocation();
    const clientId = location.pathname.split("/")[2];

    const client = useSelector((state) =>
        state.client.users.find((user) => user._id === clientId)
    ); 
  return (
    <Container>
        <TitleContainer>
            <Title>Felhasználó szerkesztése</Title>
        </TitleContainer>
        <UserContainer>
            <UserDisplay>
                <UserDisplayTop>
                    <DisplayTopTitle>
                        <DisplayTopUsername>Felhasználó adatok:</DisplayTopUsername>
                    </DisplayTopTitle>
                    <Link to="/addUser">
                        <AddButton>Létrehozás</AddButton>
                    </Link>
                </UserDisplayTop>
                <UserDisplayBottom>
                    <DisplayInfo>
                        <AccountBoxIcon className="user-icon"/>
                        <DisplayInfoTitle>{client.username}</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <WatchLaterIcon className="user-icon"/>
                        <DisplayInfoTitle>{client.createdAt} felhasználó készítésének ideje</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <WatchLaterIcon className="user-icon"/>
                        <DisplayInfoTitle>{client.updatedAt} felhasználó szerkesztésének ideje</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <MailIcon className="user-icon"/>
                        <DisplayInfoTitle>{client.email}</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <AccountBoxIcon className="user-icon"/>
                        <DisplayInfoTitle>Admin státusz: {client.isAdmin ? "Igen" : "Nem"}</DisplayInfoTitle>
                    </DisplayInfo>
                </UserDisplayBottom>
            </UserDisplay>
        </UserContainer>
    </Container>
  )
}
