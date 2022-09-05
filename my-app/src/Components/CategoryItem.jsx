import styled from 'styled-components'
import "./CategoryItem.css";

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
`
const InfoContainer = styled.div`
    position: absolute;
`
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
