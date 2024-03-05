import { useEffect } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }) => {
  const mountElement = document.getElementById("portal-root");

  // If we want to open multiple Modals using same ModalPortal, then we should add each modal as an child ModalPortal.
  const elementDiv = document.createElement("div");
  
  useEffect(() => {
    mountElement.appendChild(elementDiv);
    // cleanup
    return mountElement.removeChild(elementDiv);
  }, [mountElement, elementDiv]);

  return createPortal(children, elementDiv);
};

export default ModalPortal;
