import styled from "styled-components"

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

const DisplayTopTitle = styled.div``

const DisplayTopUsername = styled.span`
    font-weight: 700;
`

const DisplayTopUserTitle = styled.span`
    font-weight: 200;
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
                <UserDisplayBottom></UserDisplayBottom>
            </UserDisplay>
            <UserUpdate>
            </UserUpdate>
        </UserContainer>
    </Container>
  )
}
