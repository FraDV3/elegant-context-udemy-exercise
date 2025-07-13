// Import global context provider for shopping cart functionality
// Import main UI components
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
// Import mock data representing available products
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

// Main App component wrapped in CartContextProvider to share cart data across components
function App() {
  return (
    <CartContextProvider>
      {/* App header section */}
      <Header />
      {/* Shop component where products will be displayed */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          // Loop through each product in DUMMY_PRODUCTS and render a Product component
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

// Export the App component as default
export default App;
