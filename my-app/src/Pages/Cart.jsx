import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    text-align: center;
` 
const Begin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BeginTexts = styled.div``
const BeginTxt = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const BeginBtn = styled.button`
    cursor: pointer;
    padding: 20px;
    font-weight: 500;
`
const End = styled.div``
const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Kosár</Title>
            <Begin>
                <BeginBtn>Vásárlás folytatása...</BeginBtn>
                <BeginTexts>
                <BeginTxt>Kosár tartalma(1)</BeginTxt>
                <BeginTxt>Kívánságkosár(1)</BeginTxt>
                </BeginTexts>
                <BeginBtn>Fizetés</BeginBtn>
            </Begin>
            <End></End>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
