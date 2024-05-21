
import React, { useEffect, useState } from 'react';
import ProductCaroseul from './ProductCarousel';
import Navbar from './NavBar';

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("loggedin")) || false){
      setIsAuthenticated(true);
    }
    async function fetchData() {
      try {
        console.log("before fetching");
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products", {
          headers: {
            'projectId': 'f104bi07c490'
          }
        });
        console.log("after fetching");

        const data = await response.json();
        setProductData(data.data)
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <>
          <Navbar isAuthenticated={isAuthenticated} handleAuth={setIsAuthenticated} />
          <div className="mt-16 p-4">
            <ProductCaroseul title="Top Rated Products" products={productData.filter(product => product.sellerTag === 'top rated')} />
            <ProductCaroseul title="New Arrivals" products={productData.filter(product => product.sellerTag === 'new arrival')} />
            <ProductCaroseul title="Best Sellers" products={productData.filter(product => product.sellerTag === 'best seller')} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;



