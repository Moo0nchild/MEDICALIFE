import {Header} from '../components/Header';
import Box from '@mui/material/Box';

export const MainLayout = () => {
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <Header/>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>HOme</h1>
            </Box>
        </Box>
        </>
    )
}

export default MainLayout;