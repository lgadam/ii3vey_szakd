import DoneIcon from '@mui/icons-material/Done';
import styled from 'styled-components';
import "./GuideMail.css";
import { mobile } from "../responsive"

const Container = styled.div`
    height: 40vh;
    background-color: #e9fbf3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1``
const Description = styled.div`
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({ width: "70%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 15px;
`
const Button = styled.button`
    flex: 1;
`

const GuideMail = () => {
  return (
    <Container>
        <Title>Szeretnél tájékoztató emailt?</Title>
        <Description>Ne maradj le a legjobb ajánlatokról</Description>
        <InputContainer>
            <Input placeholder='Email cím megadása...'/>
            <Button className='btn-mail'>
                <DoneIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default GuideMail
