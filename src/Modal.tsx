import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";
import { CloseButton } from "./Utilities.tsx";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ onClose, children }: ModalProps) {
    const [modal] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(modal);
        return () => {
            document.body.removeChild(modal);
        };
    }, [modal]);

    return createPortal(
        <>
            <div
                className="fixed inset-0 z-[9001] bg-black/60 flex items-center justify-center">
                <CloseButton onClick={onClose} />
                {children}
            </div>
        </>,
        modal
    )
}