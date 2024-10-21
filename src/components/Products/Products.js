import React from 'react'
import Product from "./Product";
import "./Products.css"
export default function Products(prop) {
    return (
        <div>
            <h1>Products</h1>
            <div className="productList">
                {prop.productsList.map((product) => {
                    return <Product key={product.id} propName={product} />;
                })}
            </div>
        </div>
    );
}

