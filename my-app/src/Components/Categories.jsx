import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
const Container = styled.div`
    justify-content: space-between;
    padding: 30px;
    display: flex;
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories