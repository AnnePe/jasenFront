import React, { useState} from 'react';
import Grid from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material'; 


import axios from 'axios';//DEL

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  sivu: {
    color:"black",
    margin: 20,
    textAlign: 'left',
    fontSize:15,

  },
  teksti: {
    color:"black",
    margin: 0,
    textAlign: 'left',
    fontSize:20,
  },
  tausta: {
    '&:hover': {
   backgroundColor: 'lightGreen',
 },
},
});
function KuvalistaMUI (props) {
  const classes = useStyles();
  const [viesti, setViesti] = useState('');//DEL
  const [open, setOpen] = useState(false);
  
 
  const poista = async (id) => {
    try {
      await axios.delete('http://localhost:8080/jasen/delete/' + id)
      setViesti('Poistettiin');
    } catch (error) {
      setViesti('Poisto ei onnistunut');
    }
    setOpen(true);
    
  }

  return (
  
    <Grid container >
    <Typography className={classes.teksti}></Typography>
   {
   props.nimet.map(nimi=> {
   return(
     <Grid item key ={nimi.id} container  rowSpacing={1} columnSpacing={1} className={classes.sivu}>
      
       nimi: {nimi.sukunimi} {nimi.etunimi} jäsenyys: {nimi.jasenyysid} yhdistys: {nimi.yhdistysid}{nimi.jasenyysid}
       {/*<Button component={ Link }  to= { '/jkortti/' +  nimi.yhdistysid + '/' + nimi.etunimi + '/' + nimi.sukunimi + '/' + nimi.jasenyysid } >{nimi.etunimi} {nimi.sukunimi}</Button>*/}
       <IconButton color='primary'  component={ Link } to= { '/jkortti/' +  nimi.yhdistysid + '/' + nimi.etunimi + '/' + nimi.sukunimi + '/' + nimi.jasenyysid } ><ReceiptIcon /></IconButton>
       <Button color='secondary' onClick={() => poista(nimi.id)}><DeleteIcon /></Button>
     
                  
    </Grid>
    
   )

   })
 
}


<div>
<Typography sx={ {marginTop: 3, marginLeft: 5} }>{ viesti }</Typography>
 </div>

  </Grid>

 )
}


export default KuvalistaMUI;