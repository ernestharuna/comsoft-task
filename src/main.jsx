import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import DefaultLayout from './layout/DefaultLayout.jsx'
import Economic from './views/Economic.jsx'
import Assets from './views/economic/Assets.jsx'
import Equity from './views/economic/Equity.jsx'
import Liabilities from './views/economic/Liabilities.jsx'
import Income from './views/economic/Income.jsx'
import Expenses from './views/economic/Expenses.jsx'


import Administrative from './views/Administrative.jsx'
import Geocode from './views/Geocode.jsx'
import Function from './views/Function.jsx'
import Fund from './views/Fund.jsx'
import Programme from './views/Programme.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Economic />,
        children: [
          {
            path: 'assets',
            element: <Assets />
          },
          {
            path: 'equity',
            element: <Equity />
          },
          {
            path: 'liabilities',
            element: <Liabilities />
          },
          {
            path: 'income',
            element: <Income />
          },
          {
            path: 'expenses',
            element: <Expenses />
          },
        ]
      },
      {
        path: 'economic',
        element: <Economic />,
      },
      {
        path: 'administrative',
        element: <Administrative />
      },
      {
        path: 'geocode',
        element: <Geocode />
      },
      {
        path: 'function',
        element: <Function />
      },
      {
        path: 'fund',
        element: <Fund />
      },
      {
        path: 'programme',
        element: <Programme />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
