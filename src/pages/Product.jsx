import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-align: right;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

function Product() {
  return (
    <Container className="font-markazi">
      <Navbar />
      <Title>لباس ها</Title>
      <FilterContainer>
        <Filter>
          <Select>
            <Option disabled selected>
              رنگ
            </Option>
            <Option>سفید</Option>
            <Option>مشکی</Option>
            <Option>قرمز</Option>
            <Option>آبی</Option>
            <Option>زرد</Option>
            <Option>سبز</Option>
          </Select>
          <Select>
            <Option disabled selected>
              سایز
            </Option>
            <Option>ٓXS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <FilterText>دسته بندی محصولات</FilterText>
        </Filter>
        <Filter>
          <Select>
            <Option selected>جدیدترین ها</Option>
            <Option>بیشترین قیمت</Option>
            <Option>کمترین قیمت</Option>
          </Select>
          <FilterText>مرتب سازی محصولات</FilterText>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Product;
