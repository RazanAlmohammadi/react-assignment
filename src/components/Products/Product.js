import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
export default function Product({ propName }) {
    return (
        <div className="product-container">
            <Link to={`/Products/${propName.id}`} className="product-title">
                {propName.name}
            </Link>
            <div className="product-price">Price: {propName.price} SAR</div>
            <img className="product-image" src={propName.image_url} alt={propName.name} />
        </div>

    );
}
