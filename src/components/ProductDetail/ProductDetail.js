import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import notfound from "../../Images/not_found.jpg";
import './ProductDetail.css';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `https://run.mocky.io/v3/745bbdc2-54e2-4e02-9dfc-c9afdbfaad86/`;

    function getData() {
        axios.get(url)
            .then((response) => {
                const products = response.data;
                const foundProduct = products.find(item => item.id === Number(productId));
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, [productId]);

    if (loading) {
        return (
            <div className="progress">
                <CircularProgress />
                <Typography variant="h6">Loading product details...</Typography>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <img className="error" src={notfound} alt="404 Not Found" />
                <Typography variant="h6">Oops! Something went wrong. Please try again later.</Typography>
            </div>
        );
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image_url} alt={`Image of ${product.name}`} />
            <div className="product-detail-info">
                <h2>{product.name}</h2>
                <p>Description: {product.description}</p>
                <p>Price: {product.price} {product.currency}</p>
                <p>In Stock: {product.in_stock ? "Yes" : "No"}</p>
                <p>Category: {product.category}</p>
                <Typography component="legend">User Rating</Typography>
                <Rating
                    name="product-rating"
                    value={product.rating}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" sx={{ color: "pink" }} />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                />
                <Typography component="legend">
                    Overall Rating: {product.rating} / 5 ({product.rating_count} reviews)
                </Typography>
            </div>
        </div>
    );
}
