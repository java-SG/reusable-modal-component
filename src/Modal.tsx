import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";
import { CloseButton } from "./Utilities.tsx";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ onClose, children }: ModalProps) {
    const [modal] = useState(() => document.createElement("div"));
    
    /*
    Using a createElement() for [modal], modal will be used as the container Node for the modal to render,
    combined with the useEffect, this will render it only once on mount, with a cleanup function to remove this Node when the onClose() is used.
    appending the modal to the document.body will place the modal at the top level inside the DOM, outside of react's component hierarchy, 
    making it easy to absolutely place on top of the page as modal, however createPortal() is essential for this.
    */

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