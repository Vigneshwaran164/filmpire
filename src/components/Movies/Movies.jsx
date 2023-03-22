import React from 'react'

import { useState ,useEffect } from 'react';

import {Box, CircularProgress , useMediaQuery , Typography} from '@mui/material'

//import { useGetMoviesQuery } from '../../services/TMDB';

import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesBySearchQuery } from '../../services/TMDB';
import { selectMovieBySearch } from '../../features/searchMovies';




import MovieList from '../MovieList/MovieList';

 const Movies = () => {

  

  const [page, setpage] = useState(1);
  const {genreIdOrCategoryName} = useSelector((state)=>state.currentGenreOrCategory);
 const { data , error , isFetching } = useGetMoviesQuery({genreIdOrCategoryName , page});

 // const {movieName} = useSelector((state)=>state.searchMoviesByName);
  //const {data , error, isFetching} = useGetMoviesBySearchQuery({movieName});

  
  //console.log(data);

   if(isFetching) {
     return(
     <Box display="flex" justifyContent="center">
         <CircularProgress size="4rem"></CircularProgress>
     </Box>
     );
   }

   if(!data.results.length){
    return(
      <Box display="flex" alignItems="center" mt="20px">
      <Typography variant="h4">
      No Movies That match the name
      <br/>
      Please Search for something else
      </Typography>

      </Box>
    );
     
   }
   if(error){
     return 'An error has occured';


   }
 
 
  return (
    
  <div>
    <MovieList movies={data}/>
  </div>
  
    
  );
};

export default Movies;