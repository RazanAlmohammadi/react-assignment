import React from 'react';
import Product from "./Product";
import "./Products.css";

export default function Products(prop) {
    const { productList, userInput, wishList, setWishList, setUserInput } = prop;
  console.log(prop);
    const result = productList.filter((product) =>
        product.name.toLowerCase().includes(userInput.toLowerCase())
    );

    let products = productList;
    if (userInput) {
        products = result;
    }

    return (
        <div>
            <h1>Products</h1>
            <div className="productList">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}   
                        wishList={wishList}
                        setWishList={setWishList}
                    />
                ))}
            </div>
        </div>
    );
}
