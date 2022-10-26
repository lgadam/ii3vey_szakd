import { useEffect, useState } from "react";
import styled from "styled-components"
import ProductItem from "./ProductItem"
import axios from "axios";
const Container = styled.div`
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = (cat,filters) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products`
            : `http://localhost:8000/api/products?category=${cat.cat}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [products, cat, filters]);
  return (
    <Container>
        {filteredProducts.map(item=>(
            <ProductItem item={item} key={item._id} />
        ))}
    </Container>
  )
};

export default Products
