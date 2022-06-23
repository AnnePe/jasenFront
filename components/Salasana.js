import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import HaeJasenetT from './HaeJasenetT';

function Salasana () {
  const [salasana, setSalasana]=useState(
    {
     nimi:''
     }
  )
  const [ilmoitus, setIlmoitus]=useState(
   {
    teksti:'',
    }
 )
 
  const muuta =(e) =>{
   setSalasana(
     {
       ...salasana,
       [e.target.name]:e.target.value
     }
   )
  }
  const lisaaSalasana=(e)=>{
   e.preventDefault();
   if (salasana.nimi === 'salakatti'){
   setIlmoitus(
       {
         teksti:'Salasana on oikein'
    } 
     )
  }else {
   setIlmoitus(
     {
       teksti:'Virheellinen salasana'
  } 
   )
 }
    setSalasana(
     {
       nimi:''
       
        }
    )
  }
   if   (ilmoitus.teksti === 'Salasana on oikein') {
           return (
          <HaeJasenetT />
          ) 
   } 
  return (
  <Paper>
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { marginBottom: 2 },
        padding: 2
      }}
    >
      <TextField  label='Salasana' name='nimi' value={ salasana.nimi } onChange={ muuta } required />
         <Button onClick={ lisaaSalasana } variant="primary" className="mx-4" size="lg" 
          sx={{ marginRight: 3 }} > Kirjaudu</Button>
      <br></br>
      {ilmoitus.teksti}
    </Box>
  </Paper>
);
 }
  export default Salasana;