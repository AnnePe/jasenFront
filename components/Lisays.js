import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import  FormControl from '@mui/material/FormControl';
import  FormGroup from '@mui/material/FormGroup';
import { MenuItem } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';
import axios from 'axios';

function Lisays(props) {

 const [nimi, setNimet] = useState({
 
  etunimi:'',
  sukunimi:'',
  osoite:'',
  pono:'',
  puhelin:'' ,
  email:'',
  yhdistysid:'',
  jasenyysid:'',
  picture:''
});
 
const [ilmoitus, setIlmoitus]=useState('');
const [show, setShow] = useState(false);
const [alertstate, setAlertState] = useState('');

const muuta = (e) => {
  setNimet({
    ...nimi,
    [e.target.name]: e.target.value
  });

  setIlmoitus('');
};


const lisaaJasen = async (e) => {
     
   if(nimi.etunimi.length>0 && nimi.sukunimi.length>0 && nimi.email.length>0 && nimi.yhdistysid.length > 0 && nimi.jasenyysid.length > 0){
     try {
    /*axios.post('http://localhost:8080/jasen/add',formData);*/
     axios({
      method: 'post',
      url: 'http://localhost:8080/jasen/add',
      data: {
        etunimi: nimi.etunimi,
        sukunimi: nimi.sukunimi,
        osoite: nimi.osoite,
        pono: nimi.pono,
        puhelin: nimi.puhelin,
        email: nimi.email,
        yhdistysid: nimi.yhdistysid,
        jasenyysid:nimi.jasenyysid
      }
      
     })
     setIlmoitus('Lisäys onnistui');
     setShow(true);
     setAlertState('success');
    } catch (error) {
      setIlmoitus('Lisäys ei onnistunut');
      setAlertState('danger');
      setShow(true);
    }

  }else{
    setIlmoitus('Anna arvot kenttiin');
    setShow(true);
    setAlertState('danger');
  }
}
const tyhjenna = (e) => {

  setNimet({
  
    etunimi:'',
    sukunimi:'',
    osoite:'',
    pono:'',
    puhelin:'' ,
    email:'',
    yhdistysid:'',
    jasenyysid:'',
    picture:''
  });
  setIlmoitus('');
  setShow(false);
}


return(
  
  <Paper sx={ {padding:'10px', margin:'10px' } } >
    <Box
        component='form'
         sx={{
         '& .MuiTextField-root': { marginBottom: 2 },
          padding: 2
       }}
      >
      
    <Alert show={show} variant={alertstate}>
       {ilmoitus} 
    </Alert>
     
      <TextField label='Etunimi' name='etunimi' value={ nimi.etunimi } onChange={ (e) => muuta(e) }  required autoFocus fullWidth
         />
      <TextField label='Sukunimi' name='sukunimi'value={ nimi.sukunimi } onChange={ (e) => muuta(e) } required fullWidth  
         />
      <TextField label='Osoite' name='osoite' value={ nimi.osoite} onChange={ (e) => muuta(e) } fullWidth 
        />
      <TextField label='Postinumero' name='pono' value={ nimi.pono } onChange={ (e) => muuta(e) } fullWidth 
        />
      <TextField label='Puhelin' name='puhelin' value={ nimi.puhelin } onChange={ (e) => muuta(e) } fullWidth 
       />
      <TextField label='Email' name='email' value={ nimi.email } onChange={ (e) => muuta(e) } required fullWidth 
        />
      <TextField fullWidth label='Yhdistysnimi' name='yhdistysid' value={ nimi.yhdistysid } onChange={ (e) => muuta(e) } select>
              {
                  props.yhdistykset.map((yhdistys) => (
                 // <MenuItem key={ yhdistys.arvo } value={ yhdistys.arvo }>{ yhdistys.teksti }</MenuItem> jos haluaa numeron
                  <MenuItem key={ yhdistys.teksti } value={ yhdistys.teksti }>{ yhdistys.teksti }</MenuItem>
                ))
                  }
      </TextField>
     
            <TextField fullWidth label='Jasenlaji' name='jasenyysid' value={ nimi.jasenyysid } onChange={ (e) => muuta(e) } select>
              {
                  props.jasenyydet.map((jasenyys) => (
                   // <MenuItem key={ jasenyys.arvo } value={ jasenyys.arvo }>{ jasenyys.teksti }</MenuItem> jos haluaa numeron 
                  <MenuItem key={ jasenyys.teksti } value={ jasenyys.teksti }>{ jasenyys.teksti }</MenuItem>
                ))
                  }
      </TextField>   

      <TextField label='Kuva' name='picture' value={ nimi.picture } onChange={ (e) => muuta(e) } fullWidth 
       />
    
      <Box sx={{ width: 300 }}>
      </Box>
      <FormControl component="fieldset">
           <FormGroup aria-label="position" row>
           </FormGroup>
      </FormControl>
      <Box sx={ {textAlign: 'center'} }>
      
        <Button onClick={ (e) => lisaaJasen(e) } variant="primary" size="lg" >Tallenna</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='success'  className="mx-4" size="lg">Tyhjennä</Button>
        <Link to='/' className="button"   >
          <Button variant='secondary' size="lg" >Sulje</Button>
        </Link>
      </Box>
    </Box>
    
    
 
  </Paper>
  );
}

export default Lisays;
