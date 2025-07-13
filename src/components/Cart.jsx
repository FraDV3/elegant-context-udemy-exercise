import { useContext } from "react"; // Import the useContext hook from React
import { CartContext } from "../store/shopping-cart-context.jsx"; // Import the custom CartContext for accessing cart state

// Component to render and manage the shopping cart
export default function Cart() {
  // Destructure items and the function to update quantities from CartContext
  const { items, updateItemQuantity } = useContext(CartContext);

  // Calculate the total price by summing price * quantity for each item
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Format the total price to 2 decimal places and prepend currency symbol
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  // Render the cart UI
  return (
    <div id="cart">
      {/* Display message if cart is empty */}
      {items.length === 0 && <p>No items in cart!</p>}

      {/* If cart has items, list them */}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            // Format individual item price
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <br />
                  <span>({formattedPrice})</span>
                </div>
                {/* Controls to increase/decrease item quantity */}
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Display the total price of the cart */}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
