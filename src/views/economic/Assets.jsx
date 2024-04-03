import React from 'react'
import Button from '../../components/Button'
import Tree from '../../components/Tree'
import menuData from './menuData'

export default function Assets() {
    return (
        <>
            <section className='flex gap-5 items-center justify-between'>
                <div className='flex gap-4'>
                    {/* First things */}
                    <div className="group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input name="search" type="text" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 border border-transparent py-2 pr-10 placeholder:text-slate-400 pl-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" placeholder="Search" />
                    </div>

                    <div className="group relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-full absolute inset-y-0 left-3 text-gray-800 pointer-events-none group-focus-within:text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>

                        <input name="search" type="text" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 border border-transparent py-2 placeholder:text-slate-400 pl-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                            placeholder="Filters"
                        />
                    </div>
                </div>

                {/* Other things */}
                <div className='flex gap-5 items-center'>
                    <p className='font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 inline-block mr-2 mb-1">
                            <path fill-rule="evenodd" d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z" clip-rule="evenodd" />
                        </svg>

                        Reset chart
                    </p>
                    <button className='bg-white outline outline-1 outline-black rounded-lg text-black font-semibold py-2 px-4 block'>
                        Export as
                    </button>
                    <Button />
                </div>
            </section>

            <section className='mt-6 font-semibold font text-base'>
                <h3 className='text-lg mb-5'>All accounts</h3>

                <Tree />

            </section>
        </>
    )
}
