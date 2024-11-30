import { useMyCustomContextApi } from "../hooks/custom";

function CartIcon() {
  const { showCart, setShowCart, cartProducts } = useMyCustomContextApi();

  const cartCount = cartProducts.reduce(
    (sum, product) => sum + product.count,
    0
  );

  return (
    <div className="toggle-container">
      <button onClick={() => setShowCart(!showCart)} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
