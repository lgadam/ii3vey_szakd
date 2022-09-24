import styled from "styled-components"

const Container = styled.div``
const Wrapper = styled.div``
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Regisztráció</Title>
            <Form>
                <Input placeholder="felhasználónév" />
                <Input placeholder="keresztnév" />
                <Input placeholder="vezetéknév" />
                <Input placeholder="email cím" />
                <Input placeholder="jelszó" />
                <Input placeholder="jelszó újra" />
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
