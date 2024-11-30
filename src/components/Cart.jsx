import { useMyCustomContextApi } from "../hooks/custom";
import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";

function Cart() {
  const { showCart, setShowCart, cartProducts } = useMyCustomContextApi();

  const showCartClass = showCart ? "cart-overlay show" : "cart-overlay";

  return (
    <div className={showCartClass}>
      <aside className="cart">
        <button onClick={() => setShowCart(!showCart)} className="cart-close">
          <i className="fa fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        {/* cart items */}
        <div className="cart-items">
          {cartProducts.map((cartP) => (
            <SingleCartProduct product={cartP} key={cartP.id} />
          ))}
        </div>
        {/* footer */}
        <Footer />
      </aside>
    </div>
  );
}

export default Cart;
