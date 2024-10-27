import React from 'react';
import Products from "../components/Products/Products";
import Form from "../components/Form/Form";

export default function ProductPage({ products, userInput, wishList, setWishList, setUserInput }) {
 

  return (
    <div>
      <Form setUserInput={setUserInput} />
      <Products productList={products} userInput={userInput}
        setUserInput={setUserInput} wishList={wishList}  setWishList={setWishList} 
         />
    </div>
  );
}
