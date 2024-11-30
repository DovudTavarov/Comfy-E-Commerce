import { useMyCustomContextApi } from "../hooks/custom";

function CheckoutModal() {
  const { showCheckout, setShowCheckout } = useMyCustomContextApi();

  const showCheckoutClass = showCheckout
    ? "checkout-overlay show"
    : "checkout-overlay";
  return (
    <div className={showCheckoutClass}>
      <aside className="checkout">
        {/* close */}
        <button
          onClick={() => setShowCheckout(!showCheckout)}
          className="checkout-close"
        >
          <i className="fa fa-times"></i>
        </button>
        <h3 className="checkout-error">
          sorry, checkout is under construction at the moment!
        </h3>
      </aside>
    </div>
  );
}

export default CheckoutModal;
