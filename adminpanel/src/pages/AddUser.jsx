import styled from "styled-components"

const Container = styled.div`
    flex: 4;
`
const AddUserTitle = styled.h1``

const AddUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const AddUserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 20px;
`

const AddUserLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #4444;
`

const AddUserInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const AddUserSelect = styled.select`
    height: 40px;
    border-radius: 6px;
`

const AddUserOption = styled.option``

const AddUserButton = styled.button`
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: none;
    background-color: #6fdcab;
    border-radius: 10px;
    padding: 5px 10px;
`

export default function AddUser() {
  return (
    <Container>
        <AddUserTitle>Felhasználó létrehozása</AddUserTitle>
        <AddUserForm>
            <AddUserItem>
                <AddUserLabel>Felhasználónév</AddUserLabel>
                <AddUserInput type="text" placeholder="felhasználónév"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Teljes név</AddUserLabel>
                <AddUserInput type="text" placeholder="teljesnév"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Email</AddUserLabel>
                <AddUserInput type="text" placeholder="email"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Jelszó</AddUserLabel>
                <AddUserInput type="password" placeholder="jelszó"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Telefonszám</AddUserLabel>
                <AddUserInput type="text" placeholder="+36 20 123 4567"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Cím</AddUserLabel>
                <AddUserInput type="text" placeholder="3348 Szilvásvárad,Hungary"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Telefonszám</AddUserLabel>
                <AddUserInput type="text" placeholder="+36 20 123 4567"></AddUserInput>
            </AddUserItem>
            <AddUserItem>
                <AddUserLabel>Aktív Státusz</AddUserLabel>
                <AddUserSelect name="active" id="active">
                    <AddUserOption value="yes">Igen</AddUserOption>
                    <AddUserOption value="no">Nem</AddUserOption>
                </AddUserSelect>
            <AddUserButton>Hozzáadás</AddUserButton>
            </AddUserItem>
        </AddUserForm>
    </Container>
  )
}
