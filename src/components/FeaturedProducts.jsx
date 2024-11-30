import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";
import SingleProduct from "./SingleProduct";

function FeaturedProducts() {
  const { isLoading, setIsLoading, featuredProducts } = useMyCustomContextApi();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 500);
  }, []);

  return (
    <section className="section featured">
      <div className="title">
        <h2>
          <span>/</span> featured
        </h2>
      </div>
      <div className="featured-center section-center">
        {!isLoading ? (
          <h2 className="section-loading">loading...</h2>
        ) : (
          featuredProducts.map((fp) => (
            <SingleProduct product={fp} key={fp.id} />
          ))
        )}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  );
}

export default FeaturedProducts;
