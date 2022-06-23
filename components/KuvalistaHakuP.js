import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import KuvakorttiMUI from '../MUI/KuvakorttiMUI';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';

 
function KuvalistaHaku (props) {
    const [yhdistysid, setYhdistysid] = useState('');
    const [haetaan, setHaetaan] = useState(false);

    // Asettaa haettavan paikkakunnan
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
           
            <form >
               
                 
                <TextField  label='Yhdistysnimi' name='yhdistysid' value={ yhdistysid } onChange={ (e) => muuta(e) } select>
              {
                  props.yhdistykset.map((yhdistys) => (
                 // <MenuItem key={ yhdistys.arvo } value={ yhdistys.arvo }>{ yhdistys.teksti }</MenuItem> jos haluaa numeron
                  <MenuItem key={ yhdistys.teksti } value={ yhdistys.teksti }>{ yhdistys.teksti }</MenuItem>
                ))
                  }
                </TextField>
                             
                <Button onClick={ () => hae() } variant='contained' 
                                     sx={{ marginRight: 3 }} > Hae</Button>
            </form>
            {/* Näytetään haun tulos */}
            { <div>{ haku }</div> }
        </div>
    )

}

export default KuvalistaHaku;
