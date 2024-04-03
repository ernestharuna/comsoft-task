import React from 'react'
import { Outlet } from 'react-router-dom'
import Tab from '../components/economic/Tab'

export default function Economic() {
    return (
        <>
            <div className='mb-5'>
                <h1 className="text-2xl font-semibold pb-5">
                    Economic
                </h1>
                <p>
                    Your business sectior is <span className="font-semibold">Agriculture and Agribusiness </span> <a href="#" className='font-bold text-green-400 ms-1'>Change</a>
                </p>
            </div>

            <nav className='mb-5 py-4 font-semibold border-b border-neutral-300'>
                <Tab link={'assets'} text={'Assets'} badge={11} />
                <Tab link={'equity'} text={'Equity'} badge={6} />
                <Tab link={'liabilities'} text={'Liabilities'} badge={6} />
                <Tab link={'income'} text={'Income'} badge={3} />
                <Tab link={'expenses'} text={'Expenses'} badge={7} />
            </nav>

            <section>
                <Outlet />
            </section>
        </>
    )
}
