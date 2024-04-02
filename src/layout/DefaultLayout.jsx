import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="px-10 font-sans">
            <header className="my-5">
                <h1 className="font-semibold text-3xl">Chart of accounts</h1>
                <p>Configure and approve your chart of account for your business sector</p>
            </header>

            <section className="grid grid-cols-6 gap-5">
                <aside>
                    <h2 className="font-bold mb-5">Accounts</h2>
                    <ul className="border-l border-neutral-300 font-semibold">
                        <li className="py-1 px-3 border-s-4 border-green-400 text-green-400">
                            Economic
                        </li>
                        <li className="py-1 px-3">
                            Administrative
                        </li>
                        <li className="py-1 px-3">
                            Geocode
                        </li>
                        <li className="py-1 px-3">
                            Function
                        </li>
                        <li className="py-1 px-3">
                            Food
                        </li>
                        <li className="py-1 px-3">
                            Programme
                        </li>
                    </ul>
                </aside>
                <main className="col-span-5">
                    <Outlet />
                </main>
            </section>
        </div>
    )
}
