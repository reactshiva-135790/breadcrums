import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products);
      });
  }, []);

  return (
    <>
      <h1>Product Listing</h1>
      <div className="product-grid">
        {product.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export { ProductListing };
