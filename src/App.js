
import { useState, useEffect, children } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import notfound from "./Images/not_found.jpg";
import HomePage from "./Pages/HomePage.js";
import AboutPage from "./Pages/AboutPage.js";
import ProductPage from "./Pages/ProductPage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.js";
import Layout from "./Laytout/Layout.js";
import ProductDetail from "./Pages/ProductDetailPage.js";
import WishListPage from "./Pages/WishListPage.js";
import CartPage from "./Pages/CartPage.js";


function App() {

  const url = "https://run.mocky.io/v3/745bbdc2-54e2-4e02-9dfc-c9afdbfaad86";
  const [wishList, setWishList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInput, setUserInput] = useState("");
  

  function getData() {
    axios
      .get(url)
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img className="error" src={notfound} alt="404" />
        <p>{error}</p>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout wishList={wishList} />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "/About",
          element: <AboutPage />,
        },
        {
          path: "/Products",
          element: <ProductPage
            products={productList}
            setUserInput={setUserInput}
            userInput={userInput}
            wishList={wishList}      
            setWishList={setWishList} />,
        },
        {
          path: "/Products/:productId",
          element: <ProductDetail />
        },
        {
          path: "/WishList",
          element: <WishListPage wishList={wishList} />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
