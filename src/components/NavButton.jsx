import { NavLink } from "react-router-dom"

export default function NavButton({ link }) {
    return (
        <>
            <NavLink to={link} className={({ isActive, isPending }) =>
                isActive ? "border-s-2 border-green-400 text-green-500 py-2 px-3 block" : isPending ? "border-s-4 border-gray-600 text-gray-500 py-2 px-3 block" : "py-2 px-3 block"
            }>
                {link}
            </NavLink>
        </>
    )
}
