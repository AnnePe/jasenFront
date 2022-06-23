import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import KuvakorttiMUI from '../MUI/KuvakorttiMUI';
/*import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import { MenuItem } from '@mui/material';
import Paper from '@mui/material/Paper';*/
 
function KuvalistaHaku (props) {
    const [yhdistysid, setYhdistysid] = useState('');
    const [haetaan, setHaetaan] = useState(false);

    // Asettaa haettavan yhdistyksen
    const muuta = (e) => {
        setYhdistysid(e.target.value);
        setHaetaan(false);
    };

    // Asettaa todeksi, että haku saadaan tehdä
    const hae = () => {
        setHaetaan(true);
    };

    // Muuttuja, jonka sisältönä tulee olemaan haun tulos
    let haku = "";

    // Jos Hae painiketta painettiin
    if (haetaan) {
        // Filtteröidään taulukosta yhdistyksen perusteella
        let result = props.nimet.filter(nimi => nimi.yhdistysid === yhdistysid);

        // Jos filterointi tuotti tulosta
        if (result.length > 0) {
            // Mapataan haun tulos muuttujaan, joka näytetään komponetilla
            haku = result.map(nimi => {
                return (
               <Grid item key ={nimi.id}>
              <KuvakorttiMUI nimi ={nimi} />
              </Grid>
                ) // return
           }) // map
        } else {
            haku = "Yhdistyksellä ei ole jäseniä";
        }
    }

    return (
        <div>
            <form>
                <label htmlFor='yhdistysid'>Yhdistys </label>
                <input type='text' name='yhdistysid' value={ yhdistysid } onChange={ (e) => muuta(e) } />
                <input type='button' value='Hae' onClick={ () => hae() } />
            </form>
            {/* Näytetään haun tulos */}
            { <div>{ haku }</div> }
        </div>
    )

}

export default KuvalistaHaku;
