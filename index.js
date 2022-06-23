import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JasenApp from './JasenApp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Lisays from './components/Lisays';
import Aloitus from './components/Aloitus';
import HaeJasenet from './components/HaeJasenet';
import HaeJasenetK from './components/HaeJasenetK';
import HaeJasenetT from './components/HaeJasenetT';
import Salasana from './components/Salasana';
import JasenlistaP from './components/JasenlistaP';

import KuvakorttiJMUI from'./MUI/KuvakorttiJMUI';

import 'bootstrap/dist/css/bootstrap.min.css';

const jasenyydet = [
  { arvo: 1, teksti: 'Jasen' },
  { arvo: 2, teksti: 'Nuorisojäsen'},
  { arvo: 3, teksti: 'Opiskelijajäsen'},
  ];
  
const yhdistykset = [
    { arvo: 1, teksti: 'Helsinki' },
    { arvo: 2, teksti: 'Espoo'},
    { arvo: 3, teksti: 'Kuopio'},
    ]; 



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <JasenApp />
        <Routes>
          <Route path='/' element={ <Aloitus  /> } />
          <Route path='lisaa' element={ <Lisays yhdistykset={yhdistykset} jasenyydet={jasenyydet}  /> } />  
          <Route path='listaa' element={ <HaeJasenet /> } />
          <Route path='jasenkortti' element={ <HaeJasenetK  />  } /> 
          <Route path='jasenlista' element={ <Salasana  />  } /> 
          <Route path='jkortti/:yhdistysid/:etunimi/:sukunimi/:jasenyysid' element={ <KuvakorttiJMUI />  } /> 
          <Route path='jlistaP/:id/:osoite/:pono/:puhelin/:email' element={ <JasenlistaP />  } /> 
          <Route path='jasenlistapaluu' element={ <HaeJasenetT  />  } /> 
          <Route path='*' element={ <Aloitus/>  } />
        </Routes>
    </BrowserRouter> 
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
