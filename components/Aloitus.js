import React, { useState,useRef } from 'react';

import Paper from '@mui/material/Paper';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import  Tooltip  from 'react-bootstrap/Tooltip';
import  Carousel  from 'react-bootstrap/Carousel';
import makeStyles from '@mui/styles/makeStyles';

const url = 'http://localhost:8080';

const useStyles = makeStyles({
  tausta: {
    backgroundColor: "lightgreen",
    color:"black",
    borderRadius: 15,
    margin: 10,
    textAlign: 'center',
    marginLeft:'500px',
       
  },
});

function Aloitus(){
  const classes = useStyles();
  const target = useRef(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
   
    <Paper sx={ {padding:'10px',  width: '600px' , height: '650px' } } className={classes.tausta}>
 
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url + '/download/Sissi.jpg'}
          width={800}
          height={550}
          alt="1 slide"
        />
   
          <Carousel.Caption>
            <h3>Sissi the cat</h3>
            <p></p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
           className="d-block w-100"
           src= {url + '/download/Sissi_haloo.jpg'}
           width={800}
           height={550}
           alt="2 slide"
        />

        <Carousel.Caption>
          <h3>Tervehdys!</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img
           className="d-block w-100"
           src={url + '/download/Sissi_kirkas.jpg'}
           width={800}
          height={550}
    
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Mitähän tuolla...?</h3>
      <p>Sissi on utelias</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={url + '/download/Sissi_kirkas2.jpg'}
      width={800}
      height={550}
      alt="4 slide"
    />
    <Carousel.Caption>
      <h3>Katso silmiini..</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={url + '/download/Sissi_aurinko.jpg'}
      width={800}
      height={550}
      alt="4 slide"
    />
    <Carousel.Caption>
      <h3>Venytellään!</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={url + '/download/Sissi_sivu.jpg'}
      width={800}
      height={550}
      alt="5 slide"
    />
    <Carousel.Caption>
      <h3>Muista, että olen petoeläin!</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  </div> 
    <div>
       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Yhdistys Katti</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tervetuloa Katti yhdistyksen sivulle. Olemme täysin voittoa tavoittelematon yhdistys.
          Jäseneksi saa liittyä halutessaan. Jos tulee paljon porukkaa, voidaan järjestää kissamaisia tapahtumia.
          Liittymislomakkeen löydät menusta.
          Mau!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <div>
          <br></br>
        </div>
       <Button  ref={target} variant="secondary" onClick={handleShow} className="mx-4" size="lg" >
        Lisätietoja
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Lisätietoja
          </Tooltip>
        )}
      </Overlay> 
      </div>
     </Paper>
    );

}


export default Aloitus;
