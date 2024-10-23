import React from 'react';
import './Product.css';

export default function Product({ propName }) {
    return (
        <div className="product-container">
            <p className="product-title">{propName.name}</p>
            <div className="product-price">Price: {propName.price} SAR</div>
            <img className="product-image" src={propName.image_url} alt={propName.name} />
            <div className="product-category">Category: {propName.category}</div>
            <div className="product-rating">
                Rating: {propName.rating} ({propName.rating_count} reviews)
            </div>
        </div>
    );
}
