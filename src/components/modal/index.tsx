import React from "react";
import "./index.scss";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div role="modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
