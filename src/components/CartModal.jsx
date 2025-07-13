// CartModal.jsx
// This component renders a modal dialog that displays the Cart component.
// It uses a ref to expose an `open()` method to parent components to programmatically open the modal.
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

// Wrap the CartModal component with forwardRef to allow parent components to interact with its internal ref (dialog).
const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  // Create a ref to access the <dialog> DOM element.
  const dialog = useRef();

  // Expose imperative methods (like `open()`) to parent components using the forwarded ref.
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  // Render the modal dialog into a different part of the DOM using a React portal.
  // This helps in keeping the modal outside of regular component tree flow (e.g., inside a dedicated <div id="modal">).
  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      {/* Display the cart contents inside the modal. */}
      <Cart />
      {/* 
        Render action buttons or elements passed as props to the modal.
        Using `method="dialog"` allows the form to close the dialog on submission.
      */}
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

// Export the CartModal component as default for use in other parts of the app.
export default CartModal;
