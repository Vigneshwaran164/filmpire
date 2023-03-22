import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route , Routes } from 'react-router-dom';

import { Root , Content , ToolBar } from './styles';
import { Movies , MovieInformation , Actors , Profile , NavBar } from './';

import {createTheme , ThemeProvider} from '@mui/material';



const App = () => {
  return(

  <Root>
    <CssBaseline/>
    <NavBar/>
    <Content>
      <ToolBar/>
      <Routes>
        <Route exact path='/' element={<Movies/>}/> 
        <Route exact path='/profile/:id' element={<Profile/>}/>
        <Route exact path='/movie/:id' element={<MovieInformation/>} />
        <Route exact path='/actors/:id' element={<Actors/>} />
      </Routes>
    </Content>
  </Root>



  
  )

  
}

export default App