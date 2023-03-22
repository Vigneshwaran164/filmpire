

import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY ;

const page = 1;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({

    reducerPath : 'tmdbApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://api.themoviedb.org/3'}),
    endpoints : (builder)=>({

        getGenres : builder.query({
            query : ()=> `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        getMovies : builder.query({
            query : ({genreIdOrCategoryName , page})=> 
            {
                //
                //get movies by name
                 if(genreIdOrCategoryName && typeof genreIdOrCategoryName==='string'){ 
                    
                     return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
            
                
                 }
                // //get movies by id
                 if(genreIdOrCategoryName && typeof genreIdOrCategoryName==='number'){

                     return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;

                 }

                return  `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            }
        }),
        getMoviesBySearch : builder.query({

            query:({movieName})=>{
                return `https://api.themoviedb.org/3/search/${movieName}?api_key=${tmdbApiKey}&page=1`
            }

        })


    }),
});

export const {
    useGetMoviesQuery,
    useGetGenresQuery,
    useGetMoviesBySearchQuery,
} = tmdbApi;

// import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react' ;
// const tmdbApiKey = process.env.REACT_APP_TMDB_KEY ;
// const page =1 ;
// // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// export const tmdbApi = createApi({
//     reducerPath : 'tmdbApi',
//     baseQuery : fetchBaseQuery({ baseUrl : 'https://api.themoviedb.org/3'}),
//       endpoints: (builder)=>({
//             getMovies : builder.query({
//                 query : ()=>`movie/popular?page=${page}&api_key=${tmdbApiKey}`,
//             }),
//       }),
// });

// export const {
//     useGetMoviesQuery,
// } = tmdbApi ;

