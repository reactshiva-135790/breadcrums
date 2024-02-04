import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res);
        setProduct(res);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);


  return (
    <>
      <h1>Product Details</h1>
      <div className="product-grid">
        {product ? (
          <div className="product-card">
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
export { ProductDetails };
