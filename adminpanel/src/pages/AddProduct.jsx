import styled from "styled-components"

const Container = styled.div`
    flex: 4;
`
const AddProductTitle = styled.h1``

const AddProductForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const AddProductItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 20px;
`

const AddProductLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #4444;
`

const AddProductInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const AddProductSelect = styled.select`
    height: 40px;
    border-radius: 6px;
`

const AddProductOption = styled.option``

const AddProductButton = styled.button`
    width: 150px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: none;
    background-color: #6fdcab;
    border-radius: 10px;
    padding: 5px 10px;
`


export default function AddProduct() {
  return (
      <Container>
          <AddProductTitle>Termék létrehozása</AddProductTitle>
          <AddProductForm>
              <AddProductItem>
                  <AddProductLabel>Termék név</AddProductLabel>
                  <AddProductInput type="text" placeholder="Terméknév"></AddProductInput>
              </AddProductItem>
              <AddProductItem>
                  <AddProductLabel>Készlet</AddProductLabel>
                  <AddProductInput type="number" placeholder="10"></AddProductInput>
              </AddProductItem>
              <AddProductItem>
                  <AddProductLabel>Kép</AddProductLabel>
                  <AddProductInput type="file" id="file"></AddProductInput>
              </AddProductItem>
              <AddProductItem>
                  <AddProductLabel>Aktív Státusz</AddProductLabel>
                  <AddProductSelect name="active" id="active">
                      <AddProductOption value="yes">Igen</AddProductOption>
                      <AddProductOption value="no">Nem</AddProductOption>
                  </AddProductSelect>
                  <AddProductButton>Hozzáadás</AddProductButton>
              </AddProductItem>
          </AddProductForm>
      </Container>
  )
}
