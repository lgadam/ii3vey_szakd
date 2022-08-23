import styled from 'styled-components'
import "./Slider.css";
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Container = styled.div``
const Arrow = styled.div`
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
    height: 100px;

`
const Slide = styled.div`
    display: flex;
    align-items: center;
`;
const ImageContainer = styled.div`
    flex: 1;

`;

const Image = styled.img`

`;
const InfoContainer = styled.div`
    flex: 1;
`;

const Slider = () => {
  return (
    <Container className='slider-container'>
        <Arrow direction="left" className='slider-arrow'>
            <KeyboardDoubleArrowLeft/>
        </Arrow>
        <Wrapper>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <InfoContainer></InfoContainer>
        </Wrapper>
        <Arrow direction="right" className='slider-arrow'>
            <KeyboardDoubleArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider
