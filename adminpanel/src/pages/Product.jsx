import styled from "styled-components"
import { Link } from "react-router-dom";
import Charts from "../components/Charts";
import {productData} from "../dummyData";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const Container = styled.div`
    flex: 4;
    padding: 20px;

`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1``

const AddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: #6fdcab;
    border-radius: 5px;
    cursor: pointer;
`
const ProductTop = styled.div`
    display: flex;
`

const ProductBottom = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-right: 20px;
`

const ProductTopLeft = styled.div`
    flex: 1;
    width: 200px;
`

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-right: 20px;
    width: 200px;

`

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`

const ProductInfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const ProductInfoName = styled.span`
    font-weight: 600;
`

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const ProductInfoKey = styled.span``

const ProductInfoValue = styled.span`
    font-weight: 400;
`

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductFormLabel = styled.label`
    margin-bottom: 10px;
    color: #4444;
`

const ProductFormInput = styled.input`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
`

const ProductFormSelect = styled.select`
    margin-bottom: 10px;
`

const ProductFormOption = styled.option``

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`

const ProductUploadImg = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    object-fit: cover;
`

const ProductUploadLabel = styled.label``

const ProductButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: #6fdcab;
    cursor: pointer;
`

export default function Product() {
  return (
    <Container>
        <TitleContainer>
            <Title>Termék</Title>
            <Link to="/addProduct">
                <AddButton>Hozzáadás</AddButton>
            </Link>
        </TitleContainer>
        <ProductTop>
            <ProductTopLeft>
                <Charts data={productData} dataKey="Sales" title="Eladások lebontva"/>
            </ProductTopLeft>
            <ProductTopRight>
                <ProductInfoTop>
                    <ProductInfoImg img src="https://i.ibb.co/PFFtcMr/bor3.jpg"/>
                    <ProductInfoName>Rozé 2019 kiadás</ProductInfoName>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <ProductInfoItem>
                        <ProductInfoKey>Id:</ProductInfoKey>
                        <ProductInfoValue>420</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Eladások:</ProductInfoKey>
                        <ProductInfoValue>420</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Aktív:</ProductInfoKey>
                        <ProductInfoValue>Igen</ProductInfoValue>
                    </ProductInfoItem>
                    <ProductInfoItem>
                        <ProductInfoKey>Készleten:</ProductInfoKey>
                        <ProductInfoValue>nem</ProductInfoValue>
                    </ProductInfoItem>
                </ProductInfoBottom>
            </ProductTopRight>
        </ProductTop>
        <ProductBottom>
            <ProductForm>
                <ProductFormLeft>
                    <ProductFormLabel>Termék neve</ProductFormLabel>
                    <ProductFormInput type="text" placeholder="Rozé 2019 válogatás" />
                    <ProductFormLabel>Készleten</ProductFormLabel>
                    <ProductFormSelect name="inStock" id="id">
                        <ProductFormOption value="yes">Igen</ProductFormOption>
                        <ProductFormOption value="no">Nem</ProductFormOption>
                    </ProductFormSelect>
                    <ProductFormLabel>Aktív</ProductFormLabel>
                    <ProductFormSelect name="active" id="active">
                        <ProductFormOption value="yes">Igen</ProductFormOption>
                        <ProductFormOption value="no">Nem</ProductFormOption>
                    </ProductFormSelect>    
                </ProductFormLeft>
                <ProductFormRight>
                    <ProductUpload>
                        <ProductUploadImg img src="https://i.ibb.co/PFFtcMr/bor3.jpg" />
                        <ProductUploadLabel for="file">
                        <UploadFileIcon />
                        </ProductUploadLabel>
                        <ProductFormInput type="file" id="file" style={{display:"none"}} />
                    </ProductUpload>
                    <ProductButton>Frissítés</ProductButton>
                </ProductFormRight>
            </ProductForm>
        </ProductBottom>
    </Container>
  )
}
