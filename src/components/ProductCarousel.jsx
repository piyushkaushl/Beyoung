import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
const ProductCaroseul= ({title, products}) => {
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const ProductCard = (product) => {
    console.log(product)
    return (
      <Link to={`/productDetails/${product._id}`}>
      <div className="min-w-xl rounded overflow-hidden shadow-lg m-2">
        <img className="min-w-full min-h-128 object-cover" src={product.displayImage} alt={product.name} />
        <div className="px-4 py-4">
          <div className="font-bold text-lg mb-1">{product.name}</div>
          <p className="text-gray-700 text-sm">{product.subCategory}</p>
          <p className="text-gray-900 text-base font-semibold">{product.price} INR</p>
        </div>
      </div>
      </Link>
    );
  };

  return (
    <div className="card">
      <h1 className='font-bold text-3xl m-0'>{title}</h1>
      <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
        autoplayInterval={3000} itemTemplate={ProductCard} />
    </div>
  );
}

export default ProductCaroseul;
