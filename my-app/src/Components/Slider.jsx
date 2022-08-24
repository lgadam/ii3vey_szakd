import styled from 'styled-components'
import "./Slider.css";
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import mainLogo from'./logo_szakdoga.PNG';

const Container = styled.div``
const Arrow = styled.div`
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
    height: 100px;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding:50px;
`;
const Title = styled.h1`
    font-size: 64px;

`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 24px;
    font-weight: 300;
`
const Button = styled.button``

const Slider = () => {
  return (
    <Container className='slider-container'>
        <Arrow direction="left" className='slider-arrow'>
            <KeyboardDoubleArrowLeft/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src={mainLogo} />
                </ImageContainer>
                <InfoContainer>
                    <Button className='btn-slider'>Részletek</Button>
                    <Title>Teszt borválogatás</Title>
                    <Description>Rövid leírás a termékről ...</Description>
                </InfoContainer>
            </Slide>
            <Slide>
                <ImageContainer>
                    <Image src={mainLogo} />
                </ImageContainer>
                <InfoContainer>
                    <Button className='btn-slider'>Részletek</Button>
                    <Title>Teszt borválogatás</Title>
                    <Description>Rövid leírás a termékről ...</Description>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" className='slider-arrow'>
            <KeyboardDoubleArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider
