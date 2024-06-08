import {Router, Route, Routes, Navigate } from 'react-router-dom';
import {Home} from '../health/pages/Home';
import {PageOne} from '../pages/PageOne';
import {PageTwo} from '../pages/PageTwo';
import {PageThre} from '../pages/PageThre';
export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<h1>Este es el login</h1>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/PageOne' element={<PageOne/>}/>
            <Route path='/PageTwo' element={<PageTwo/>}/>
            <Route path='/PageThre' element={<PageThre/>}/>
            <Route path='/*' element={ <Navigate to='/home'/> }/>
        </Routes>
    )
}
