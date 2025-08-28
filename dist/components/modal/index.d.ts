import React from "react";
import "./index.scss";
type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};
export declare const Modal: ({ isOpen, onClose, children, }: ModalProps) => React.JSX.Element | null;
export default Modal;
