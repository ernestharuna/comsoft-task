import React, { useState } from 'react';
import Modal from './Modal';

const AddItem = ({ itemName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="hover:text-green-500 text-black font-semibold p-2" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mr-4">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
            </button>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <div className='flex items-center justify-between mb-3'>
                    <h5 className='font-semibold text-lg'>{itemName}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" onClick={handleClose}>
                        <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </div>

                <hr />

                <div className='mt-3'>
                    <div className='mb-5'>
                        <label htmlFor="account_class" className='font-semibold block text-left'>Account class</label>
                        <input type="text" className='border-2 rounded-lg box-border py-2 px-1 inline-block w-full shadow-sm focus:outline-green-400' />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="category_name" className='font-semibold block text-left'>Category name</label>
                        <input type="text" className='border-2 rounded-lg box-border py-2 px-1 inline-block w-full shadow-sm focus:outline-green-400' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="category_name" className='font-semibold block text-left'>Note <span className="text-gray-400">(Optional)</span></label>
                        <textarea name="" id="" cols="30" rows="5" className='border-2 rounded-lg box-border py-2 px-1 inline-block w-full shadow-sm focus:outline-green-400' placeholder='Add note here'></textarea>
                    </div>

                    <div className='mb-9'>
                        <label htmlFor="category_name" className='font-semibold block text-left'>Category type</label>
                        <input type="text" className='border-2 rounded-lg box-border py-2 px-1 inline-block w-full shadow-sm focus:outline-green-400' />
                    </div>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 w-full bg-white text-black rounded-lg hover:bg-gray-100 outline outline-1" onClick={handleClose}>
                            Cancel
                        </button>
                        <button className="px-4 py-2 w-full bg-black text-white rounded-lg hover:bg-gray-800">Add category</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddItem;
