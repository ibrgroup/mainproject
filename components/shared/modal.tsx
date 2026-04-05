// Modal.tsx
import React from 'react';

interface ModalProps {
    onClose: () => void;
    onUpdate: () => void;
    children: React.ReactNode; // Allow children to be passed
}

const Modal: React.FC<ModalProps> = ({ onClose, onUpdate, children }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                {children} {/* Render children here */}
                <button onClick={onUpdate}>Update</button>
            </div>
        </div>
    );
};

export default Modal;   