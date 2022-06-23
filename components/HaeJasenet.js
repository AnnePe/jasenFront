import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Nimilista from './Nimilista';

import axios from 'axios';

  function HaeJasenet () {
   
   const [jasenet, setJasenet] = useState([]);
   const [virhe, setVirhe] = useState('Haetaan');

   const haeKaikkiJasenet = async () => {
    try {
      const response = await 
      axios.get('http://localhost:8080/jasen/all');
      
      setJasenet(response.data);
      setVirhe('');
    } catch (error) {
      setJasenet([]);
      setVirhe('Tietojen haku ei onnistunut');
    }
  }
  useEffect( () => {
    haeKaikkiJasenet(); 
}, [])

useEffect( () => {
    haeKaikkiJasenet(); 
}, [])
if (virhe.length > 0) {
    return ( <Typography>{ virhe }</Typography> );
}

if (jasenet.length > 0) {
return ( < Nimilista nimet= { jasenet } /> );

}

  }

export default HaeJasenet;
