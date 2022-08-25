import styled from "styled-components"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';

const InfoContainer = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-out;
    cursor: pointer;
`

const Container = styled.div`
    flex:1;
    min-width: 280px;
    height: 350px;
    margin: 5px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d3f8e7;
    position: relative;
    &:hover ${InfoContainer}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 370px;
    height: 370px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #24d684;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    transition:all 0.5s ease-out;
    &:hover{
        background-color: #1a995d;
        transform: scale(1.2);
    }
`

const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image}/>
      <InfoContainer>
        <Icon>
            <ShoppingBasketIcon />
        </Icon>
        <Icon>
            <SearchOutlined />
        </Icon>
        <Icon>
            <FavoriteIcon />
        </Icon>
      </InfoContainer>
    </Container>
  )
}

export default ProductItem
