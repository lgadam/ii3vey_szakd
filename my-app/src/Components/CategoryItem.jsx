import styled from 'styled-components'
import "./CategoryItem.css";

const Container = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 300px;
`
const InfoContainer = styled.div``
const Title = styled.h1``
const Button = styled.button``

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.image}/>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Button className='btn-categoryItem'>Mutass többet</Button>
        </InfoContainer>
    </Container>
  )
}

export default CategoryItem
