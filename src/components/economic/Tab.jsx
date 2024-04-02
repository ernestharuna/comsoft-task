import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tab({ link }) {
    return (
        <>
            <NavLink to={link} className={({ isActive, isPending }) =>
                isActive ? "border-b-4 border-green-400 text-green-400 py-2 px-3 block" : isPending ? "border-b-4 border-gray-600 text-gray-400 py-2 px-3 block" : "py-2 px-3 block"
            }>
                {link}
            </NavLink>
        </>
    )
}
