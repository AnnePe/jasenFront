import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
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
  
 });
function KuvakorttiMUI (props) {
const classes = useStyles();
if (props.nimi.yhdistysid==="Helsinki"){
  var kuvax ="Sissi_lahi.jpg"
}else if (props.nimi.yhdistysid==="Espoo"){
   kuvax ="Sissi_haloo.jpg"
}else{
  kuvax ="Sissi_sivu.jpg"
}
  return (
  
        <Card sx={ {width: 250, margin: 4}}  className={classes.card}>
          
         <CardHeader
            title= "Jäsenkortti"
            subheader= {props.nimi.yhdistysid}
              />
        <CardMedia
           component="img"
           height="140"
           image={url + '/download/'+kuvax}
           alt="Kuva"
         />
      <CardContent>
          <Typography  variant="h5" component="div">
    
          {props.nimi.etunimi} {props.nimi.sukunimi}  <br></br>
            {props.nimi.jasenyysid}
          </Typography>
 
        </CardContent>
        </Card>
   )
}

export default KuvakorttiMUI;
