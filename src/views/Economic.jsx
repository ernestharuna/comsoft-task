import React from 'react'
import { Outlet } from 'react-router-dom'
import Tab from '../components/economic/Tab'

export default function Economic() {
    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold pb-5">
                    Economic
                </h1>
                <p>
                    Your business sectior is Agriculture abd Agribusiness <a href="#" className='font-bold text-green-400'>Change</a>
                </p>
            </div>

            <nav>
                <Tab link={asset} />
            </nav>

            <section>
                <Outlet />
            </section>
        </>
    )
}
