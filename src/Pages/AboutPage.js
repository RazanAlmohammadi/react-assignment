import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">

      <section className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to our women’s clothing store! We’re passionate about providing elegant, quality apparel that empowers women to express their unique style.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire confidence and celebrate individuality through fashion. We believe in creating pieces that make every woman feel beautiful, comfortable, and true to herself.
        </p>
      </section>

      <section className="collection">
        <h2>Our Collection</h2>
        <p>
          We offer a curated selection of women’s clothing, from chic basics to bold statement pieces. Each piece is designed with quality and detail in mind to meet our high standards of comfort and style.
        </p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Our journey began with a simple idea: to bring unique, quality fashion to women everywhere. We are committed to providing trendy and timeless styles, with sustainability at the core of our values.
        </p>
      </section>
    </div>
  );
}
