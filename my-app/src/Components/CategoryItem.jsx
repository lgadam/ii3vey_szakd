import styled from 'styled-components'
import "./CategoryItem.css";
import { mobile } from "../responsive"
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    margin: 5px;
    flex:1;
    margin-bottom: 100px;
    padding-bottom: 35px;
`
const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`
const InfoContainer = styled.div`
    position: absolute;
`
const Title = styled.h1`
    color:black;
`
const Button = styled.button``

function CategoryItem({item}) {
  return (
    <Link to={`/products/${item.cat}`}>
        <Container>
            <Image src={item.image}/>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button className='btn-categoryItem'>Mutass többet</Button>
            </InfoContainer>
        </Container>
    </Link> 
  )
}

export default CategoryItem
