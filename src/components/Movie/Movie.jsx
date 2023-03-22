import React from 'react'

import { Grid , Typography , Grow , Tooltip , Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react'

import { Box } from '@mui/system'
import { Scale } from '@mui/icons-material'
const Movie = ({movie,idx}) => {
 const theme =useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{p:'10px' , }} >
    <Grow in key={idx} timeout={(idx+1)*250}>
    <Box component={Link} alignItems='center'
         sx={{ fontWeight: 'bolder', textDecoration:'none', overflow:'hidden', 


              [theme.breakpoints.up('xs')]:{
                  display:'flex',
                  flexDirection : 'column'
              },
            //  '&& .Mui-selected:hover':{
            //      cursor:'pointer',
            //      textDecoration: 'none'
            //  }
             }} 
            to={`/movie/${movie.id}`}>

            <Box component="img" alignSelf="center" height="300px"  sx={{
            borderRadius:"20px", marginBottom:'10px', 
            '&:hover':{
              transform : 'scale(1.05)'
            },
            
             }} alt={movie.title} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://www.fillmurray.com/200/300` }>

            </Box>

         {/* <img alt={movie.title} height='300px' 
              '& .hover':{
                 transform : 'scale(1.05)'
               
             }
         
           src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `https://www.fillmurray.com/200/300` }/>
             */}
            <Typography variant="h6"  sx={{color:theme.palette.text.primary ,overflow:'hidden',textOverflow : 'ellipsis',  whiteSpace :'nowrap', marginBottom:'0',width:'140px' ,marginTop:'10px' ,textAlign:"center" }} >
                 {movie.title}
            </Typography>

            <Tooltip placement='bottom' disableTouchListener title={`${movie.vote_average}/10`}>
              <div>
                <Rating  readOnly value={movie.vote_average /2} precision={0.1}/>      
              </div>        
            </Tooltip>



      
    </Box>

    </Grow>

    </Grid>
  )
}

export default Movie