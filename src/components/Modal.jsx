import React from 'react';

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed outline outline-1 outline-black inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-lg">
                {children}
                <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
