// Shop.jsx
// This component renders the main shop section, including a title and a dynamic list of products.

export default function Shop({ children }) {
  // The 'children' prop allows nested elements or components (like product items) to be passed into this component.
  // The main container for the shop area.
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {/* The list of product items passed in via the 'children' prop. */}
      <ul id="products">{children}</ul>
    </section>
  );
}
