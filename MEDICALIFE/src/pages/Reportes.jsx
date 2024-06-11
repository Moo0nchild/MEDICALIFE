import React from 'react';
import {Header} from '../health/components/Header';
import Box from '@mui/material/Box';

export const Reportes = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
          <Header/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>
              <br />
              <br />
              <h1>Reportes</h1>
            </div>
            </Box>
      </Box>
    </>
  );
}

export default Reportes;
