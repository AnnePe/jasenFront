import { Table, TableCell, TableRow, TableHead, TableBody, TableContainer} from '@mui/material';
import React, { useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import axios from 'axios';//DEL
import { Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import HaeJasenetT from './HaeJasenetT';
import Alert from 'react-bootstrap/Alert';


const useStyles = makeStyles({
  taulu: {
    borderSpacing: 0,
    border: 20,
    columnWidth:50,

  },
  teksti: {
    color:"black",
    margin: 0,
    textAlign: 'left',
    fontSize:30,
  },
  tausta: {
    '&:hover': {
   backgroundColor: 'lightGreen',
 },
},
});

function Jasenlista (props) {
  const [viesti, setViesti] = useState('');//DEL
 
  const [show, setShow] = useState(false);
  const [alertstate, setAlertState] = useState('');
  
  
  const classes = useStyles();

 if (show  ) {
  return ( 
    <div>
       <Alert show={show} variant={alertstate}>
       {viesti} 
    </Alert>
      
      <HaeJasenetT />
    </div> 
  )
}
  const poista = async (id) => {
   
    try {
      await axios.delete('http://localhost:8080/jasen/delete/' + id)
      setViesti('Poisto onnistui');
      setAlertState('success');
      setShow(true);
         
    } catch (error) {
      setViesti('Poisto ei onnistunut');
      setShow(true);
      setAlertState('warning');
    }
        
  }
  if (props.nimet.length === 0) {
    setViesti('Ei jäsentietoja');
    setShow(true);
    setAlertState('warning');
    return ( 
      <div>
      <Alert show={show} variant={alertstate}>
      {viesti} 
   </Alert>
    
   </div> 
    );
  }
  
   return (
      <div>
    <TableContainer component={Paper}>
    
     <Table >
        <TableHead>
          <TableRow>
          <TableCell >Id</TableCell>
          <TableCell >Nimi</TableCell>
          <TableCell >Osoite</TableCell>
          <TableCell >Postinumero</TableCell>
          <TableCell >Puhelin</TableCell>
          <TableCell >Email</TableCell>
          <TableCell >Yhdistys</TableCell>
          <TableCell >Jasenyys</TableCell>
          <TableCell >Toiminnot</TableCell>
          </TableRow>
        </TableHead>
     
      
          <TableBody className={classes.taulu}>
      { props.nimet.map(nimi=>{
         return(
          
          <TableRow key={nimi.id} >
         
             <TableCell  >{nimi.id}  </TableCell>
             <TableCell  >{nimi.etunimi} {nimi.sukunimi}  </TableCell>
              <TableCell>{nimi.osoite}</TableCell>
             <TableCell>{nimi.pono}</TableCell>
             <TableCell >{nimi.puhelin}</TableCell>
             <TableCell>{nimi.email}</TableCell>
             <TableCell>{nimi.yhdistysid}</TableCell>
             <TableCell>{nimi.jasenyysid}</TableCell>
          
             <TableCell> <IconButton color='primary'  component={ Link } to= { '/jkortti/' +  nimi.yhdistysid + '/' + nimi.etunimi + '/' + nimi.sukunimi + '/' + nimi.jasenyysid } ><ReceiptIcon /></IconButton></TableCell>
             <TableCell><Button color='secondary' onClick={() => poista(nimi.id)}><DeleteIcon /></Button></TableCell>
          
             <TableCell><IconButton color='primary'  component={ Link } to= { '/jlistaP/' +  nimi.id + '/' + nimi.osoite+ '/' + nimi.pono + '/' + nimi.puhelin+ '/' + nimi.email} ><EditIcon /></IconButton></TableCell>
        </TableRow>
            )
        })    
      
      }
         </TableBody>  
        </Table>  
    </TableContainer>
    </div>
  )
  
}

export default Jasenlista;
