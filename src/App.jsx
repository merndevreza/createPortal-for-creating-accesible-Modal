import { useState } from "react";
import Modal from "./Modals/Modal";  
import ModalPortal from "./Modals/ModalPortal";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <div className="py-4 bg-green-300 text-center space-y-5">
        <h1 className="text-2xl">createPortal for creating Modal in React</h1>
        <button
          onClick={() => setIsShowModal(true)}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Show Modal
        </button>
      </div>
      {isShowModal && (
        <ModalPortal>
          <Modal onClose={setIsShowModal} />
        </ModalPortal>
      )}
    </>
  );
}

export default App;
