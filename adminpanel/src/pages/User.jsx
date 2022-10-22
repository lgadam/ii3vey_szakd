import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import PlaceIcon from '@mui/icons-material/Place';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import logo from '../components/navbar/panel_logo.PNG';

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
`

const UserContainer = styled.div`
    display: flex;
`

const UserDisplay = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-right: 20px;
`

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
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

const DisplayTopUserTitle = styled.span`
    font-weight: 200;
`
const DisplayTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #6666;
`

const DisplayInfoTitle = styled.span`
    margin-left: 10px;

`

const DisplayInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`
const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const UserUpdateLeft = styled.div``

const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:10px;
`

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`

const Input = styled.input`
    height: 25px;
    border: none;
    width: 250px;
    border-bottom: 1px solid gray;
`

const UserUpdateRight = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const UserUpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
const UpdateButton = styled.button`
    border-radius: 5px;
    border:none;
    padding: 5px;
    cursor: pointer;
    background-color:#6fdcab;

`

export default function User() {
  return (
    <Container>
        <TitleContainer>
            <Title>Felhasználó szerkesztése</Title>
            <AddButton>Létrehozás</AddButton>
        </TitleContainer>
        <UserContainer>
            <UserDisplay>
                <UserDisplayTop>
                    <DisplayTopTitle>
                        <DisplayTopUsername>Ligárt Ádám</DisplayTopUsername>
                        <DisplayTopUserTitle>Programtervező informatikus</DisplayTopUserTitle>
                    </DisplayTopTitle>
                </UserDisplayTop>
                <UserDisplayBottom>
                    <DisplayTitle>Adatok:</DisplayTitle>
                    <DisplayInfo>
                        <AccountBoxIcon className="user-icon"/>
                        <DisplayInfoTitle>lgadam</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <WatchLaterIcon className="user-icon"/>
                        <DisplayInfoTitle>2000.11.24</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <PhoneIphoneIcon className="user-icon"/>
                        <DisplayInfoTitle>+36 20 123 4567</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <MailIcon className="user-icon"/>
                        <DisplayInfoTitle>lgadam@gmail.com</DisplayInfoTitle>
                    </DisplayInfo>
                    <DisplayInfo>
                        <PlaceIcon className="user-icon"/>
                        <DisplayInfoTitle>3348 Szilvásvárad, Hungary</DisplayInfoTitle>
                    </DisplayInfo>
                </UserDisplayBottom>
            </UserDisplay>
            <UserUpdate>
                <UserUpdateTitle>Szerkesztés</UserUpdateTitle>
                <UserUpdateForm>
                    <UserUpdateLeft>
                        <UserUpdateItem>
                            <Label>Felhasználónév</Label>
                            <Input type="text" placeholder="felhasználónév"></Input>
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Teljes név</Label>
                            <Input type="text" placeholder="teljesnév"></Input>
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Email</Label>
                            <Input type="text" placeholder="email"></Input>
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Telefonszám</Label>
                            <Input type="text" placeholder="Telefonszám"></Input>
                        </UserUpdateItem>
                        <UserUpdateItem>
                            <Label>Lakcím</Label>
                            <Input type="text" placeholder="Lakcím"></Input>
                        </UserUpdateItem>
                    </UserUpdateLeft>
                    <UserUpdateRight>
                        <UserUpdateImg img src={logo}/>
                        <Label htmlFor="file"><UploadFileIcon /></Label>
                        <Input type="file" id="file" style={{display: "none"}}></Input>
                        <UpdateButton>Feltöltés</UpdateButton> 
                    </UserUpdateRight>  
                </UserUpdateForm>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}
