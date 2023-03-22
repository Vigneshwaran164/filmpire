import React from 'react';

import { AppBar , IconButton ,Toolbar , Drawer , Button ,Avatar, Typography, List, ListItemText, Paper, Box } from '@mui/material';

import {useMediaQuery} from '@mui/material'
import { Menu , AccountCircle , Brightness4 , Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
//import useStyles from './styles';'
import { MyToolBar ,MyIconButton, MyDrawer } from './styles';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

import Search from '../Search/Search';


import SideBar from '../SideBar/SideBar';


const drawerWidth = 240;


const NavBar = () => {

  const isMobile = useMediaQuery('(max-width:600px)');
  const theme =useTheme();
  const isAuthenticated = true;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }
  

 

  return (

    <>
      <AppBar position="fixed" >
        <MyToolBar>
        {isMobile && (
          <MyIconButton 
            color='inherit'
            edge='start'
            style={{outline:'none'}}
            onClick={()=>setMobileOpen((prevMobileOpen)=> !prevMobileOpen)}    

          >
              <Menu/>
          </MyIconButton>
        )}  
        <IconButton color='inherit' sx={{ml:1}} onClick= {()=>{}}>
        {theme.palette.mode==='dark' ? <Brightness7/> : <Brightness4/>}

        </IconButton>
        {!isMobile && <Search/>}
        <div>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={()=>{}}>
              Login &nbsp; <AccountCircle/>
            </Button>

          ):(
            <Button
              color="inherit"
              component = {Link}
              to={`/profile/:id`}
              sx={{'&:hover' : {
                color:'white !important',
                textDecoration: 'none',
              }}}
              onClick={()=>{}}
              >
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
              style={{ width: 30 , height: 30}}
              alt="Profile"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"

              />

            </Button>

          )}
        </div>
        {isMobile && <Search/>}
        </MyToolBar>

      </AppBar> 
     
      <div>
       
             <Box
               component="nav"
               sx={{width: {sm : drawerWidth},flexShrink:{sm:0}}}
               aria-label = "menu container"
             >
               {isMobile ? (
                <Drawer
                  
                  variant='temporary'
                  anchor='right'
                  open={mobileOpen}
                  onClose={()=>setMobileOpen((prevMobileOpen)=> !prevMobileOpen)}
                  ModalProps={{keepMounted:true}}
                  sx={{
                    display : {xs: 'block',sm:'none'},
                    '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth},
                  }}
 
                >
                <SideBar setMobileOpen={setMobileOpen}></SideBar>

                </Drawer>
               ):(
                <Drawer
                  variant="permanent"
                  sx={{
                    '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth},
                  }}
                  open
                
                >
                  <SideBar setMobileOpen={setMobileOpen} />

                </Drawer>
               )}

               
              
            </Box> 
            
      

      </div>

    </>
  )
}

export default NavBar