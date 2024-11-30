import { useLocation, useParams } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";
import PageHero from "./PageHero";
import { formatPrice } from "../utils/utils";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addProductToCart } = useMyCustomContextApi();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <h3>Product not found</h3>;
  }

  const {
    fields: { image, name, company, price, colors },
  } = product;

  return (
    <>
      <PageHero path={name} />
      {/* product info */}
      <section className="products/single-product">
        <div className="section-center single-product-center">
          <img
            src={image[0].url}
            className="single-product-img img"
            alt={"accent chair by caressa"}
          />
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">{name}</h2>
              <p className="single-product-company text-slanted">
                by {company}
              </p>
              <p className="single-product-price">{formatPrice(price)}</p>
              <div className="single-product-colors">
                {colors.map((color) => {
                  return (
                    <span
                      className="product-color"
                      style={{ backgroundColor: color }}
                    ></span>
                  );
                })}
              </div>
              <p className="single-product-desc">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <button
                onClick={() => addProductToCart(product)}
                className="addToCartBtn btn"
              >
                add to cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
