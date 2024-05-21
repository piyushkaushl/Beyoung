import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${id}`,
        {
          headers: {
            'accept': 'application/json',
            'projectId': 'f104bi07c490'
          }

        }
        );
        const data = await response.json();
        setProduct(data.data);
        console.log(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product: {error.message}</div>;

  return (
    <>
    <div className="container mx-auto p-4 mt-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col">
          <img src={product.displayImage} alt={product.name} className="w-[75%] h-auto rounded" />
          <div className="flex flex-row mt-4 space-x-2">
            {product.images.map((img, idx) => (
              <img key={idx} src={img} alt={`Product Image ${idx}`} className="w-16 h-16 rounded" />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8 mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">₹ {product.price}</p>
          <div className="mb-4">
            <span className="font-bold">SIZE</span>
            <div className="flex space-x-2 mt-2">
              {product.size.map((s, idx) => (
                <span key={idx} className="px-3 py-1 border rounded cursor-pointer">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Product Description</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
