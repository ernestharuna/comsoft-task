import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tab({ link, text, badge }) {
    return (
        <>
            <NavLink to={link} className={({ isActive, isPending }) =>
                isActive ? "border-b-2 border-green-600 text-green-600 py-4 px-5"
                    : isPending ? "border-b-4 border-gray-600 text-gray-400 py-4 px-5" : "py-4 px-5"
            }>
                {text} {" "}
                <span className='bg-green-100 py px-3 ms-2 rounded-full text-green-600 font-semibold'>
                    {badge}
                </span>
            </NavLink>
        </>
    )
}
