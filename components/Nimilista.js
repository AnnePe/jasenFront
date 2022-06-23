import  React from 'react';
import { DataGrid, GridToolbarContainer,GridToolbarFilterButton,GridToolbarExport } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const sarakkeet = [
  {field: 'id', headerName: 'ID' },
  {field: 'etunimi', headerName: 'Etunimi', width: 150 , editable: false},
  {field: 'sukunimi', headerName: 'Sukunimi', width: 200 , editable: false},
  {field: 'osoite', headerName: 'Osoite', width: 200, editable: false },
  {field: 'pono', headerName: 'Postinumero' , width: 100, editable: false},
  {field: 'puhelin', headerName: 'Puhelin', width: 200, editable: false },
  {field: "email",  headerName: "Email", width: 200, editable: false   },
  {field: "yhdistysid",  headerName: "Yhdistys", width: 150, editable: false   },
  {field: "jasenyysid",  headerName: "Jäsenyys", width: 150, editable: false   },
   
];  

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
function Nimilista (props) {
  
  return (
   <Paper>
    <div style={{ display: 'flex', height: '100%' }} >
        <div style={{ flexGrow: 1 }}>
           <DataGrid 
             rows={ props.nimet }
             columns={ sarakkeet }
             autoHeight={ true }
             autoWidth={ true }
             checkboxSelection
             components={{
          Toolbar: CustomToolbar,}}
           />
        </div>
    </div>
       
  </Paper> 
    
  )
  
}

export default Nimilista;
