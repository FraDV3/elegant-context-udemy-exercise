// Importing necessary modules and context for cart functionality
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

// Product component represents a single product item in the UI
// It uses context to add the product to the shopping cart
export default function Product({ id, image, title, price, description }) {
  // Access the addItemToCart function from CartContext using useContext
  const { addItemToCart } = useContext(CartContext);

  return (
    // Product layout with image, content, and action button
    <article className="product">
      {/* Display the product image */}
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          {/* Display the product title */}
          <h3>{title}</h3>
          {/* Display the product price */}
          <p className="product-price">${price}</p>
          {/* Display the product description */}
          <p>{description}</p>
        </div>
        <p className="product-actions">
          {/* Button to add the current product to the shopping cart */}
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
