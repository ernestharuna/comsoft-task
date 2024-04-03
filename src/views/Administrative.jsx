import React from 'react'
import Tree from '../components/Tree'

export default function Administrative() {
    return (
        <>
            <div className='mb-5'>
                <h1 className="text-2xl font-semibold pb-5">
                    Administrative
                </h1>
            </div>

            <section className='flex gap-5 items-center justify-between mb-10'>
                <div className='flex gap-4'>
                    {/* First things */}
                    <div className="group relative">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-green-500 dark:group-focus-within:text-slate-400">
                            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
                            <path d="m6 7 6 5 6-5"></path>
                        </svg>
                        <input name="search" type="text" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 border border-transparent py-2 pr-10 placeholder:text-slate-400 pl-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" placeholder="Search" />
                    </div>

                    <div className="group relative">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-green-500 dark:group-focus-within:text-slate-400">
                            <path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path>
                            <path d="m6 7 6 5 6-5"></path>
                        </svg>
                        <input name="search" type="text" class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 border border-transparent py-2 placeholder:text-slate-400 pl-12 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white" placeholder="Filters" />
                    </div>
                </div>

                {/* Other things */}
                <div className='flex gap-5 items-center'>
                    <button className='bg-slate-900 rounded-lg text-gray-50 text-base font-semibold py-2 px-8 block'>
                        Add new
                    </button>
                </div>
            </section>

            <div className='font-semibold '>
                <Tree />
            </div>
        </>
    )
}
