import React, { useState, useEffect } from "react";

const Modal = ({
  triggerElement,
  closeExisting = true,
  escapeClose = true,
  closeText,
  content,
  closeClass,
  modalClass = "modal",
  blockerClass = "real-modal",
  showClose = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen && escapeClose && event.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = () => {
    if (closeExisting) {
      closeModal();
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalContent = (
    <div className={modalClass}>
      {showClose && (
        <a
          href="#close-modal"
          onClick={closeModal}
          className={`close-modal ${closeClass}`}
        >
          {closeText}
        </a>
      )}
      {content}
    </div>
  );

  if (isModalOpen) {
    return (
      <div>
        <div className={blockerClass}>
          <div className={`blocker ${isModalOpen ? "current" : ""}`} />
        </div>
        {modalContent}
      </div>
    );
  }

  return <span onClick={openModal}>{triggerElement}</span>;
};

export default Modal;
