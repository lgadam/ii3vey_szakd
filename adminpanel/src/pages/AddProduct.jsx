import { useState } from "react"
import styled from "styled-components"
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";
  import app from "../firebase";
  import { addProduct } from "../redux/apiCalls";
  import { useDispatch } from "react-redux";
const Container = styled.div`
    flex: 4;
`
const AddProductTitle = styled.h1``

const AddProductForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
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
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };
    const handleCat = (e) => {
        setCat(e.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
            }
          },
          (error) => {
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const product = { ...inputs, image: downloadURL, categories: cat };
              addProduct(product, dispatch);
            });
          }
        );
      };
    return (
        //input name => ugyanannak kell lenni mint az adatbázisban
        <Container>
            <AddProductTitle>Termék létrehozása</AddProductTitle>
            <AddProductForm>
                <AddProductItem>
                    <AddProductLabel>Termék név</AddProductLabel>
                    <AddProductInput name="title" type="text" placeholder="Terméknév" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Kép</AddProductLabel>
                    <AddProductInput type="file" id="file" onChange={e => setFile(e.target.files[0])}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Készlet</AddProductLabel>
                    <AddProductSelect name="inStock" onChange={handleChange}>
                        <AddProductOption value="true">Igen</AddProductOption>
                        <AddProductOption value="false">Nem</AddProductOption>
                    </AddProductSelect>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Leírás</AddProductLabel>
                    <AddProductInput name="description" type="text" placeholder="Leírás" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Kategória:</AddProductLabel>
                    <AddProductInput name="categories" type="text" placeholder="feherbor,vorosbor,roze" onChange={handleCat}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Típus:</AddProductLabel>
                    <AddProductInput name="type" type="text" placeholder="példa: edes" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Ár:</AddProductLabel>
                    <AddProductInput name="price" type="number" placeholder="Ár" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductButton onClick={handleClick}>Hozzáadás</AddProductButton>
                </AddProductItem>
            </AddProductForm>
        </Container>
    )
}
