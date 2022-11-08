import React, { useState } from "react";
import Modal from "react-modal";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="LOGIN">
        <div>Here is i</div>
      </Modal>
    </div>
  );
};

export default LoginModal;
