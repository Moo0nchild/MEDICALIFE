import * as React from 'react';
import {Header} from '../components/Header';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event) {
    event.preventDefault();
}

export const MainLayout = (datos) => {
    return (
        <>
        <Box sx={{ display: 'flex' }}>
            <Header/>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <br />
                <br />
                <React.Fragment>
                    <h1>{datos.usuario}</h1>
                    <Typography component="p" variant="h4">
                        $3,024.00
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                        on 15 March, 2019
                    </Typography>
                    <div>
                        <Link color="primary" href="#" onClick={preventDefault}>
                        View balance
                        </Link>
                    </div>
                </React.Fragment>
            </Box>
        </Box>
        </>
    )
}

export default MainLayout;