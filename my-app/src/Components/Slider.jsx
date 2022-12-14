import styled from 'styled-components'
import "./Slider.css";
import KeyboardDoubleArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { useState } from 'react';
import { slideritems } from '../data'; 
import { mobile } from "../responsive"
import info_bg from '../Components/info_background.jpg';

const Container = styled.div`
    ${mobile({ display: "none" })}
    background: linear-gradient(
        rgba(140, 67, 67, 0.5),
        rgba(140, 67, 67, 0.5)
    ),
    url(${info_bg});
`
const Arrow = styled.div`
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 1.25s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw); //transform: a slideok közötti mozgatás ezt használjuk a click eventnél
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImageContainer = styled.div`
    margin-top: 200px;
    height: 100%;
    flex: 1;
    justify-content: center;
    text-align: center;
`;

const Image = styled.img`
    height: 400px;
    width: 400px;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    background-color: #e9fbf3;
    margin-bottom: 120px;
`;
const Title = styled.h1`
    font-size: 64px;

`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 24px;
    font-weight: 300;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);//slider lapozáshoz..
    const handleClick = (direction) => {

    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);   
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    };
    return (
    <Container className='slider-container'>
        <Arrow direction="left" onClick={() => handleClick("left")} className='slider-arrow'>
            <KeyboardDoubleArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slideritems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.image} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")} className='slider-arrow'>
            <KeyboardDoubleArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider
