import {Route, Routes, Navigate } from 'react-router-dom';
import {Home} from '../health/pages/Home';
import {Pacientes} from '../pages/Pacientes';
import {Medicos} from '../pages/Medicos';
import {CitasMedicas} from '../pages/CitasMedicas';
import {Especialidades} from '../pages/Especialidades';
import {Usuarios} from '../pages/Usuarios';
import {Reportes} from '../pages/Reportes';
import Login from '../auth/Login';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/pacientes' element={<Pacientes/>}/>
            <Route path='/medicos' element={<Medicos/>}/>
            <Route path='/citasMedicas' element={<CitasMedicas/>}/>
            <Route path='/especialidades' element={<Especialidades/>}/>
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/reportes' element={<Reportes/>}/>
            <Route path='/*' element={ <Navigate to='/'/> }/>
        </Routes>
    )
}
