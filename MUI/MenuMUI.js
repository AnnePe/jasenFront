import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';

import { Link } from 'react-router-dom';
function MenuMUI () {

  const [anchorMenu, setMenuOpen] = useState(null);

  const menuOpen = (e) => { 
    setMenuOpen(e.currentTarget); 
  
  }
  const menuClose = () => { 
    setMenuOpen(null); 
  }

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={ menuOpen } color='inherit'><MenuIcon /></IconButton>
          <Typography variant='h5' sx={ {flexGrow:1, textAlign:'center'} }>Yhdistys KATTI</Typography>
        </Toolbar>
      </AppBar>

      <MenuList>
        <Menu
          anchorEl={ anchorMenu }
          open={ Boolean(anchorMenu) }
          onClose={ menuClose}>

          <MenuItem onClick={ menuClose } component={ Link } to='/'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Etusivu' />
          </MenuItem>
          <MenuItem onClick={ menuClose } component={ Link } to='listaa'>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary='Jäsenlistaus haku ja tulostus' />
          </MenuItem>
          <MenuItem onClick={ menuClose } component={ Link } to='jasenkortti'>
            <ListItemIcon><AddCardRoundedIcon /></ListItemIcon>
            <ListItemText primary='Jäsenkortit yhdistyksittäin' />
          </MenuItem>
          <MenuItem onClick={ menuClose } component={ Link } to='lisaa'>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Jäsentietojen lisäys' />
          </MenuItem>
          <MenuItem onClick={ menuClose } component={ Link } to='jasenlista'>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Jäsentietojen päivitys ja poisto ' />
          </MenuItem>
         
          
        </Menu>
      </MenuList>
  </Box>
  )
}

export default  MenuMUI;
