import './index.css'

import { Outlet, Route, Routes } from 'react-router-dom'

import CCourse from './common/components/CCourse'
import CNew from './common/components/CNew'
import CProfile from './common/components/CProfile'
import CQuiz from './common/components/CQuiz'
import MHome from './modules/home/pages'
import MSearch from './modules/search/pages'
import CReference from './common/components/CReference'
import MFilterModal from './modules/search/components/MFilterModal'

function App() {
    return (
        <div className='flex flex-col flex-1 min-h-screen absolute top-[4vh]'>
            <Routes>
                <Route path='/' element={<MHome />} />
                <Route path='/search' element={<MSearch />} />
                <Route path='/quiz' element={<CQuiz />} />
                <Route path='/reference' element={<CReference />} />
                <Route path='/new' element={<CNew />} />
                <Route path='/course' element={<CCourse />} />
                <Route path='/profile' element={<CProfile />} />
                {/* test */}
                <Route path='/test' element={<MFilterModal />} />
            </Routes>

            <Outlet />
            {/* <CFooter /> */}
        </div>
    )
}

export default App
