import { useEffect, useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  // Added event listeners for keydown events to detect if the Escape key is pressed and close the modal accordingly.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    //cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  // Automatically focus the modal element when it mounts
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <div
      className="h-screen w-full bg-black bg-opacity-50 fixed left-0 top-0 z-10"
      role="dialog"
      aria-modal="true"
      // By setting tabIndex="-1" on the modal and then calling focus() on it when the modal mounts, we can ensure that keyboard users are immediately brought into the modal's content when it opens, without interrupting the regular tab order of the document.
      tabIndex="-1"
      ref={modalRef}
    >
      <div className="bg-gray-700 text-white space-y-2 rounded p-5 max-w-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <h1>Welcome to our App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          nesciunt.
        </p>
        <button
          onClick={() => onClose(false)}
          className="bg-red-400 px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
