// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import { tmdbApi } from "../services/TMDB";

// export default configureStore ({
//     reducer: {
//         [tmdbApi.reducerPath] : tmdbApi.reducer,

//     },
    


// });

import { configureStore } from "@reduxjs/toolkit";
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import searchMoviesByNameReducer from './../features/searchMovies';

import { tmdbApi } from "../services/TMDB";
export default configureStore({

    reducer : {

        [tmdbApi.reducerPath] : tmdbApi.reducer ,
        currentGenreOrCategory : genreOrCategoryReducer,
        searchMoviesByName : searchMoviesByNameReducer,



        

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});