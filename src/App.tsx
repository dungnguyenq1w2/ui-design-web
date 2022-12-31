import './index.css'

import { Outlet, Route, Routes } from 'react-router-dom'
import MHome from './modules/home/pages'
import MSearch from './modules/search/pages'
import CFooter from './common/components/CFooter'

function App() {
    return (
        <div className='flex flex-col flex-1 bg-black bg-opacity-[85%] min-h-screen pb-10'>
            <Routes>
                <Route path='/' element={<MHome />} />
                <Route path='/search' element={<MSearch />} />
            </Routes>

            <Outlet />
            <CFooter />
        </div>
    )
}

export default App
