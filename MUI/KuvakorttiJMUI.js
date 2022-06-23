import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';

const url = 'http://localhost:8080';
const useStyles = makeStyles({
  card: {
   
    backgroundColor: "lightgreen",
    color:"black",
    borderRadius: 15,
    margin: 15,
    textAlign: 'center',
  },
  button: {
      
    color:"red",
    borderRadius: 15,
    margin: 15,
    textAlign: 'center',
    "&:hover":{backgroundColor:'white'},
      
  },
  linkki: {
      
    color:"black",
    fontSize:'15px',
       
  },
  
 });
function KuvakorttiJMUI () {

  const classes = useStyles();

  let { yhdistysid } = useParams();
  let { etunimi } = useParams();
  let { sukunimi } = useParams();
  let { jasenyysid } = useParams();

  
  return (
  <Paper>
    <Card sx={ {width: 230, margin: 4}}  className={classes.card}>

    <CardHeader
            title= "Kissa Yhdistys"    
            subheader= {yhdistysid}          
    />
    <Typography> Jäsenkortti </Typography>
   <CardMedia
        component="img"
        height="140"
      //  image={ '/kuvia/Sissi.jpg'}
        image={url + '/download/Sissi.jpg'}
        alt="Kuva"
      />
    <CardContent>
    <Typography  variant="h5" component="div">
       {etunimi} {sukunimi}  <br></br>
    </Typography>
    <Typography  variant="h6" component="div">
      {jasenyysid}
    </Typography> 
    </CardContent>

    </Card>
    <div>
     <Link to='/jasenlistapaluu' className={classes.linkki}>Sulje</Link> 
    </div>
  </Paper>  

  )
 
}

export default KuvakorttiJMUI;
