import React from 'react'
import Product from "./Product";
import "./Products.css"
export default function Products(prop) {
    const { productList, userInput } = prop;
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
                {products.map((product) => {
                    return <Product key={product.id} propName={product} />;
                })}
            </div>
        </div>
    );
}

