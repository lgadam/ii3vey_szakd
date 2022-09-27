import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Announcement from '../Components/Announcement'
import styled from 'styled-components'

const Container = styled.div``

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />

        <Footer />
    </Container>
  )
}

export default Cart
