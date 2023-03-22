
import React from 'react'

import { useEffect } from 'react';
import { Divider, List , ListItem , ListItemText, ListItemButton,
    ListSubheader , ListItemIcon, Box
    , CircularProgress,
    Typography,
    Toolbar
 } from '@mui/material';

 import MailIcon from '@mui/icons-material/Mail';
 
 import { Link } from 'react-router-dom';

 import { useTheme } from '@emotion/react';

import { imageLink } from './styles';
import { red } from '@mui/material/colors';

import { useGetGenresQuery } from '../../services/TMDB'

import genreIcons from './../../assets/genres';


import { useSelector, useDispatch } from 'react-redux';

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';




const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'

const categories = [
  {label : 'Popular' , value : 'popular'},
  {label : 'Top Rated' , value : 'top_rated'},
  {label : 'Upcoming' , value : 'upcoming'},

]
 
 
const SideBar = ({setMobileOpen}) => {

  const {genreIdOrCategoryName} = useSelector((state)=> state.currentGenreOrCategory );

  console.log(genreIdOrCategoryName);

   


   const theme = useTheme();

   const {data , isFetching , error } = useGetGenresQuery();

   const dispatch = useDispatch();

   

   
   console.log(data);
   if(isFetching){
    return(
     <Box display="flex" alignItems='center' mt='20px'>
        <CircularProgress size='4rem'>

        </CircularProgress>

     </Box>
    )
   }
   if(!data.genres.length){
    return(
    <Box display="flex" alignItems="center">

    <Typography variant="h4">
      There is no genre specific categories
    </Typography>

    </Box>
    )
   }

   if(error){
    return 'an error has occured in fetching categories';
   }



  
return(


  <>

    <Link to='/' style={{display:'flex' , justifyContent:'center' , padding :'10% 0'}} >
      <img style={{width:'70%'}} src={theme.palette.mode==='light' ? blueLogo : redLogo} 
      alt='filmpire Logo'/>

    </Link>
    <Divider/>
    <List>
      <ListSubheader>
        Categories
      </ListSubheader>
      {categories.map(({label , value})=>(
        <Box component={Link} key={value} sx={{color : theme.palette.text.primary , textDecoration:'none' }} to="" >
            <ListItemButton onClick={()=>dispatch(selectGenreOrCategory(value))} >
              <ListItemIcon>
                 <Box component="img" src={genreIcons[label.toLowerCase()]} height={30} sx={{ 
                  filter : theme.palette.mode=== 'dark' ? 'invert(1)' : 'dark' ,
                }}/>
              </ListItemIcon> 
              <ListItemText primary={label} />


            </ListItemButton>
          </Box>

        

      ))}

      </List>
      <Divider/>
      <List>
      <ListSubheader>
        Genres
      </ListSubheader>
      {data.genres.map(({id , name})=>(
        <Box component={Link} key={id} sx={{color : theme.palette.text.primary , textDecoration:'none' }} to="" >
            <ListItemButton onClick={()=>dispatch(selectGenreOrCategory(id))} >
               <ListItemIcon>
                <Box component="img" src={genreIcons[name.toLowerCase()]} height={30} sx={{ 
                  filter : theme.palette.mode=== 'dark' ? 'invert(1)' : 'dark' ,
                }}/>
              </ListItemIcon> 
              <ListItemText primary={name} />


            </ListItemButton>
          </Box>

        

      ))}

      </List>

    

    
    
  </>

        
    
)
}

export default SideBar;