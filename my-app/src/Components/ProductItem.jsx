import styled from "styled-components"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Container = styled.div`
    flex:1;
    min-width: 280px;
    height: 350px;
    margin: 5px;
`
const Circle = styled.div``
const Image = styled.img`
    height: 75%;
`
const InfoContainer = styled.div``
const Icon = styled.div``

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
