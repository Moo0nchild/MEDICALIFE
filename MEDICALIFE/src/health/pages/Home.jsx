import MainLayout from '../layout/MainLayout';
import Login from '../../auth/Login';
export const Home = (datos) => {
    return (
        <div>
            { (!datos.length) ? <Login/> : <MainLayout user={datos}/> }
        </div>
    )
}