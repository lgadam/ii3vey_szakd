import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'
import "../Components/Slider.css"
import bor from '../advbor1.png';
import Delete from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import "../Components/Slider.css"

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
    border: 0.5px solid lightgray;
    border-radius: 15px;
    padding: 20px;
    height: 50vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`
const ProductPrice = styled.div``
const Amount = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 12px;
    border: 1px solid #1a995d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const SummaryTitle = styled.h1``
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.type === "total" && "22px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button``
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
                            <ProductAmountContainer>
                                <Delete />
                                <Amount>1</Amount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>1200 ft</ProductPrice>
                        </PriceData>
                    </Product>
                    <Hr/>
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
                            <ProductAmountContainer>
                                <Delete />
                                <Amount>1</Amount>
                                <Add />
                            </ProductAmountContainer>
                            <ProductPrice>1200 ft</ProductPrice>
                        </PriceData>
                    </Product>
                </Information>
                <Summary>
                    <SummaryTitle>Rendelés áttekintés</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Részösszeg:</SummaryItemText>
                        <SummaryItemPrice>2400 ft</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Szállítási költség:</SummaryItemText>
                        <SummaryItemPrice>1200 ft</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Összesen fizetendő:</SummaryItemText>
                        <SummaryItemPrice>3600 ft</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton className="btn-slider">Fizetés...</SummaryButton>
                </Summary>
            </End>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
