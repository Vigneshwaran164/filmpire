import { createSlice } from "@reduxjs/toolkit";


export const searchMoviesByName = createSlice({
    name:'searchMoviesByName',
    initialState:{
        movies:'',
    },
    reducers:{
        selectMovieBySearch : (state,action)=>{
            state.movies = action.payload;
        }

    }

})

export const {selectMovieBySearch} = searchMoviesByName.actions;

export default  searchMoviesByName.reducer;

