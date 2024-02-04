import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const sliceTrending = res.products.slice(0, 6);
        setTrendingProduct(sliceTrending);
      });
  }, []);
  return (
    <>
      <h1>Home Page</h1>
      <span>Trending Products</span>
      <div className="product-grid">
        {trendingProduct.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/product">
        <Button name="View More Product" />
      </Link>
    </>
  );
};
export { Home };
