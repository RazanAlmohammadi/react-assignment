import React from 'react'
import "./Product.css"
export default function Product(prop) {
    return (
        <div className="product-container">
            <p className="product-title"> {prop.propName.title}</p>
            <div className="product-price"> price: {prop.propName.price}</div>
            <img className="product-image" src={prop.propName.image} alt={prop.propName.title} />
            <div className="product-category">Category: {prop.propName.category}</div>
            <div className="product-rating">
                Rating: {prop.propName.rating.rate} ({prop.propName.rating.count} reviews)
            </div>
        </div>
    );
}