import React from 'react';
import "./Home.css";
import Button from "@mui/material/Button";

export default function Main() {
  
  return (
    <div>
      <div className="home">
        <h1>Welcome to Our Store!</h1>
        <h3>We're delighted to have you here!</h3>
        <Button variant="contained" color="error" className="btn">Buy Now </Button>

      </div>

      <div className="promo-banner">
        <p> 🎉 Get 20% off your first purchase! Use code WELCOME20 🎉</p>
      </div>

      <section className="user-reviews">
        <h2>User Reviews</h2>
        <div className="review">
          <h4>Ella Thompson</h4>
          <p>"I bought a dress for a special occasion, and it was perfect! The fit was great, and I received so many compliments!"</p>
        </div>
        <div className="review">
          <h4>Hannah Williams</h4>
          <p>"The online shopping experience was smooth, and the quality of the clothes exceeded my expectations. I will be back!"</p>
        </div>
        <div className="review">
          <h4>Emma Brown</h4>
          <p>"Their sustainable fashion initiatives are commendable, and I love being part of it!"</p>
        </div>
      </section>
    </div>
  )
}
