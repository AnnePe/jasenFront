import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { useParams } from 'react-router';
import axios from 'axios';

import { Link } from 'react-router-dom';

function JasenlistaP () {
    let { id, osoite,pono,puhelin,email } = useParams();

    const [show, setShow] = useState(false);
    const [alertstate, setAlertState] = useState('');
 

// tilamuuttujat ja niiden muuttamiskutsu
  const [jasen, setValues] = useState({
      id: id,
      osoite: osoite,
      pono: pono,
      puhelin: puhelin,
      email: email
    
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...jasen,
       [e.target.name]: e.target.value
     });
   };
   const paivita = async (id) => {
         
      try {
      axios({
       method: 'patch',
       url:('http://localhost:8080/jasen/edit/'+id), 
       data:{osoite:jasen.osoite,
        pono:jasen.pono,
        puhelin:jasen.puhelin,
        email:jasen.email
      }
       
       })
      // setViesti(jasen.osoite);
      setViesti('Päivitys onnistui');
      setShow(true);
      setAlertState('success');
     } catch (error) {
      
     setViesti('Päivitys ei onnistunut');
     setShow(true);
     setAlertState('danger');
     }
    
 }
  

  return (
    <Paper sx={ {padding:'10px', margin:'10px' } }>
      <Alert show={show} variant={alertstate}>
          {viesti} 
       </Alert>
    <form  >
    
      <TextField label='Osoite' name='osoite' value={ jasen.osoite }
      onChange={ muuta } margin='normal' required />
      <TextField label='Postinumero' name='pono' value={ jasen.pono }
      onChange={ muuta } margin='normal'  required />
      <TextField label='Puhelin' name='puhelin' value={ jasen.puhelin }
      onChange={ muuta } margin='normal' required />
      <TextField label='Email' name='email' value={ jasen.email }
      onChange={ muuta } margin='normal' required  />
       <div > 
               <Button onClick={() => paivita(jasen.id)}   variant='success'  size="md">Hyväksy muutokset</Button>
        
        <Link to='/jasenlistapaluu' className="button">
          <Button  variant="primary"  className="mx-4" size="md" >Sulje</Button>
        </Link>
      </div>

    </form>
   
  </Paper>
  );
}

export default JasenlistaP;
