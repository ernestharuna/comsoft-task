import React, { useState } from 'react';
import Modal from './Modal';

const Button = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="bg-slate-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleClick}>
                Add category
            </button>
            <Modal isOpen={isOpen} onClose={handleClose}>
                {/* Modal content goes here */}
                <p>This is the content inside the modal.</p>
            </Modal>
        </>
    );
};

export default Button;
