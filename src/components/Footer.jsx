import { useMyCustomContextApi } from "../hooks/custom";
import { formatPrice } from "../utils/utils";

function Footer() {
  const { cartProducts, showCheckout, setShowCheckout } =
    useMyCustomContextApi();

  const totalCartPrice = cartProducts.reduce((sum, item) => {
    return sum + item.fields.price * item.count;
  }, 0);

  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button
        onClick={() => setShowCheckout(!showCheckout)}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;
