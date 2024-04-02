import { NavLink, Outlet } from "react-router-dom";
import NavButton from "../components/NavButton";

export default function DefaultLayout() {
    return (
        <div className="px-10 font-sans">
            <header className="pt-5 pb-7">
                <h1 className="font-semibold text-3xl pb-3">Chart of accounts</h1>
                <p>Configure and approve your chart of account for your business sector</p>
            </header>

            <section className="grid grid-cols-6 gap-5">
                <aside>
                    <h2 className="font-bold mb-5">Accounts</h2>
                    <nav className="border-l border-neutral-300 font-semibold capitalize">
                        <NavButton link={'economic'} />
                        <NavButton link={'administrative'} />
                        <NavButton link={'geocode'} />
                        <NavButton link={'function'} />
                        <NavButton link={'fund'} />
                        <NavButton link={'programme'} />
                    </nav>
                </aside>
                <main className="col-span-5">
                    <Outlet />
                </main>
            </section>
        </div>
    )
}
