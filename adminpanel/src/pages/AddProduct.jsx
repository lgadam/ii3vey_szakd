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
        //input name => ugyanannak kell lenni mint az adatb??zisban
        <Container>
            <AddProductTitle>Term??k l??trehoz??sa</AddProductTitle>
            <AddProductForm>
                <AddProductItem>
                    <AddProductLabel>Term??k n??v</AddProductLabel>
                    <AddProductInput name="title" type="text" placeholder="Term??kn??v" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>K??p</AddProductLabel>
                    <AddProductInput type="file" id="file" onChange={e => setFile(e.target.files[0])}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>K??szlet</AddProductLabel>
                    <AddProductSelect name="inStock" onChange={handleChange}>
                        <AddProductOption value="true">Igen</AddProductOption>
                        <AddProductOption value="false">Nem</AddProductOption>
                    </AddProductSelect>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Le??r??s</AddProductLabel>
                    <AddProductInput name="description" type="text" placeholder="Le??r??s" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Kateg??ria:</AddProductLabel>
                    <AddProductInput name="categories" type="text" placeholder="feherbor,vorosbor,roze" onChange={handleCat}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>T??pus:</AddProductLabel>
                    <AddProductInput name="type" type="text" placeholder="p??lda: edes" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>??r:</AddProductLabel>
                    <AddProductInput name="price" type="number" placeholder="??r" onChange={handleChange}></AddProductInput>
                </AddProductItem>
                <AddProductItem>
                    <AddProductButton onClick={handleClick}>Hozz??ad??s</AddProductButton>
                </AddProductItem>
            </AddProductForm>
        </Container>
    )
}
