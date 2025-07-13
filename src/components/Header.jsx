// Header component that displays the main navigation bar and a cart button.
import { useRef, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
import CartModal from "./CartModal.jsx";

export default function Header() {
  // Create a reference to control the CartModal component programmatically
  const modal = useRef();
  // Access the shopping cart items from the CartContext
  const { items } = useContext(CartContext);
  // Calculate the total quantity of items in the cart
  const cartQuantity = items.length;

  // Handler to open the cart modal when the cart button is clicked
  function handleOpenCartClick() {
    modal.current.open();
  }

  // Define the modal actions based on whether the cart has items
  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  // Render the header with the cart modal and a cart button showing item count
  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
