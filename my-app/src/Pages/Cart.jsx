import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'
import "../Components/Slider.css"
import bor from '../advbor1.png';
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
    padding: 20px;
    justify-content: space-between;
`
const BeginTexts = styled.div``
const BeginTxt = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const BeginBtn = styled.button``
const End = styled.div`
    display: flex;
    justify-content: space-between;
`
const Information = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductData = styled.div`
    flex: 2;
    display: flex;
`
const PriceData = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Datas = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductType = styled.span``
const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Kosár</Title>
            <Begin>
                <BeginBtn className='btn-slider'>Vásárlás folytatása...</BeginBtn>
                <BeginTexts>
                <BeginTxt>Kosár tartalma(1)</BeginTxt>
                <BeginTxt>Kívánságkosár(1)</BeginTxt>
                </BeginTexts>
                <BeginBtn className='btn-slider'>Fizetés</BeginBtn>
            </Begin>
            <End>
                <Information>
                    <Product>
                        <ProductData>
                            <Image src={bor} />
                            <Datas>
                                <ProductName><b>Termék:</b>Lafiesta fruit</ProductName>
                                <ProductId><b>Azonosító:</b>12345678</ProductId>
                                <ProductType><b>Fajta:</b>fehér bor</ProductType>  
                            </Datas>
                        </ProductData>
                        <PriceData>
                            Ár
                        </PriceData>
                    </Product>
                </Information>
                <Summary>summary</Summary>
            </End>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
