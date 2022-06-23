import React from "react";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blueGrey from '@mui/material/colors/blueGrey';
import { amber, blue, lightGreen, red } from '@mui/material/colors';//jos käytät heksa ei tarvi importoida


import MenuMUI from './MUI/MenuMUI';
const theme = createTheme({
 
  palette: {
    primary: {main: lightGreen[100], contrastText: '#000000' },//heksa valkoinen
    secondary: {main: red[300], contrastText: '#FFFFFF'},
    text: {primary: blue[800],  secondary: blueGrey , contrastText: '#FFFFFF'},
    action: {hover: amber[50]},
    background: {default: amber[50]}
  },
  typography: {
  
     fontFamily: "'Montserrat', 'sans-serif'",
   // fontFamily: "'Red Hat Mono', 'monospace'",
  },
});

function JasenApp() {
 
  return (
    
    <Box >
     
    <ThemeProvider theme={ theme }>
      <CssBaseline />
    <MenuMUI/>
    </ThemeProvider>
    </Box>
   
  );
}
export default JasenApp;
