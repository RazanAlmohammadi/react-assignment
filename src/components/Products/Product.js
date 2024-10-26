import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

export default function Product({ propName }) {
    return (
        <div className="product-container">
            <div className="product-title">
                {propName.name}
            </div>
            <div className="product-price">Price: {propName.price} SAR</div>
            <img className="product-image" src={propName.image_url} alt={propName.name} />
            <Button
                variant="contained"
                color="error"
                className="btn"
                component={Link}
                to={`/Products/${propName.id}`}
            >
                More Details
            </Button>
        </div>
    );
}
