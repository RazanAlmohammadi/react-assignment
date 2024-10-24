import React from 'react'
import Product from "./Product";
import "./Products.css"
export default function Products({ products }) {
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

