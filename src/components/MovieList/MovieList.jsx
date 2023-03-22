import React from 'react'

import { Grid, Typography   } from '@mui/material'
import Movie from '../Movie/Movie'


const MovieList = ({movies}) => {



  return (
    
      <Grid container sx={(theme)=>({display: 'flex' ,flexWrap: 'wrap' , justifyContent : 'space-between' , overflow:'hidden' , 
      [theme.breakpoints.down('sm')]
        :{ justifyContent : 'center'}
        })}>
        {movies.results.map((movie,idx)=>(
     
         <Movie key={idx} movie={movie} idx={idx}/>
        ))}
      </Grid>
    
    
  )
}

export default MovieList