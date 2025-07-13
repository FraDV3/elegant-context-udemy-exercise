# Elegant Context 🛍️

**Elegant Context** is a React demo project that showcases how to manage global state using the **React Context API**. The app simulates a small e-commerce site where users can browse products, add them to a cart, and view or modify the cart contents.

## 🧠 Key Concepts

- React Context API for global state management (shopping cart)
- Component composition and reusable props
- Dynamic UI rendering using `.map()`
- React hooks: `useContext`, `useReducer`
- Conditional rendering and state-based updates

## 🚀 Features

- 🛒 Add products to cart
- ➕ Increment or ➖ decrement item quantity
- 🧹 Reset or clear the cart
- 🧾 Cart modal with total cost and checkout button
- ✨ Elegant styling with context-sensitive UI updates

## 🗂️ Project Structure

```
src/
│
├── components/
│   ├── Cart.jsx
│   ├── CartModal.jsx
│   ├── Header.jsx
│   ├── Product.jsx
│   └── Shop.jsx
│
├── store/
│   └── shopping-cart-context.jsx   # Context provider logic
│
├── dummy-products.js               # Sample product data
├── App.jsx                         # Main app structure
├── index.css                       # Styles
└── main.jsx                        # React DOM entry point
```

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/elegant-context.git
   cd elegant-context
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm run dev
   ```

## 📸 Preview

![Elegant Context Screenshot](./path-to-screenshot.png)

> Make sure to replace `./path-to-screenshot.png` with an actual image in your repo.

## 📚 Learnings

This project is part of a **React course** focusing on:
- Avoiding prop-drilling
- Centralizing state logic
- Applying the Context API in real-world UI flows

## ✅ To-Do (Stretch Goals)

- Persist cart with localStorage
- Add authentication
- Responsive mobile layout
- Backend integration for checkout

---

**Built with ❤️ during a React Udemy course journey.**
