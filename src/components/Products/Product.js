import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { Snackbar } from '@mui/material';

export default function Product(prop) {
    const { product, wishList, setWishList } = prop;
    const [open, setOpen] = useState(false);

    function addToFav(product) {
        const isInclude = wishList.some((item) => item.id === product.id);
        if (!isInclude) {
            setWishList([...wishList, product]);
            setOpen(true);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
    return (
        <div className="product-container">
            <div className="product-title">
                {product.name}
            </div>
            <div className="product-price">Price: {product.price} SAR</div>
            <img className="product-image" src={product.image_url} alt={product.name} />
            <div className="button-container">
                <Button
                    variant="contained"
                    color="error"
                    className="btn"
                    component={Link}
                    to={`/Products/${product.id}`}
                >
                    More Details
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    className="btn"
                    onClick={() => addToFav(product)}
                >
                    Add to fav
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    message={`A ${product.name} is added to the wishlist`}
                />
            </div>
        </div>
    );
}
