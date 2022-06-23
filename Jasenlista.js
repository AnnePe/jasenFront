import { Table, TableCell, TableRow, TableHead, TableBody} from '@mui/material';
import React, { useState} from 'react';
import IconButton from '@mui/material/IconButton';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import axios from 'axios';//DEL
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';
import HaeJasenetT from './HaeJasenetT';

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
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const classes = useStyles();

  let dialog =   
  <Dialog onClick={handleClose} open={open}>
    <DialogContent>
      <DialogContentText color='secondary'>{viesti}
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      </DialogContentText>
    </DialogContent>
  </Dialog>;

if (viesti === 'Poistettiin') {
  return ( 
    <div>
      { dialog }
      <HaeJasenetT />
    </div> 
  )
}
  const poista = async (id) => {
    try {
      await axios.delete('http://localhost:8080/jasen/delete/' + id)
      setViesti('Poistettiin');
    } catch (error) {
      setViesti('Poisto ei onnistunut');
    }
    setOpen(true);
    
  }
  if (props.nimet.length === 0) {
    return ( 
    <p>Jäseniä ei ole</p> 
    );
  }
    return (
      <div>
      <Paper sx={{ maxWidth: 800 }}>
     <Table>
        <TableHead>
          <TableRow>
          <TableCell >Tiedot</TableCell>
          </TableRow>
        </TableHead>
    </Table> 
      { 
         
       props.nimet.map(nimi=>{
         return(
        
          <TableBody className={classes.taulu}>
       
        <TableRow key={nimi.id} className={classes.tausta} >
         
          <TableCell  >{nimi.etunimi} {nimi.sukunimi}  </TableCell>
          <TableCell>{nimi.osoite}</TableCell>
          <TableCell>{nimi.pono}</TableCell>
          <TableCell>{nimi.puhelin}</TableCell>
          <TableCell>{nimi.email}</TableCell>
          <TableCell></TableCell>
          <IconButton color='primary'  component={ Link } to= { '/jkortti/' +  nimi.yhdistysid + '/' + nimi.etunimi + '/' + nimi.sukunimi + '/' + nimi.jasenyysid } ><ReceiptIcon /></IconButton>
          <Button color='secondary' onClick={() => poista(nimi.id)}><DeleteIcon /></Button>
          <IconButton color='primary'  component={ Link } to= { '/jlistaP/' +  nimi.id + '/' + nimi.osoite } ><EditIcon /></IconButton>
        </TableRow>
        </TableBody>  
         )
         
       })    
          
      }
     
      <div>
            <Typography sx={ {marginTop: 3, marginLeft: 5} }>{ viesti }</Typography>
      </div>
      </Paper>
    </div>
  )
  
}

export default Jasenlista;
