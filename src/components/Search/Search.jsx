import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TextField , Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectMovieBySearch } from '../../features/searchMovies';
import { useTheme } from '@emotion/react';



const defaultFormFields = {
    movieName:'',
}
var searchmovie = "" ;

const SearchMovies = () => {



    const [formFields, setFormFields] = useState(defaultFormFields);

    const {movieName} = formFields;
    
    const dispatch = useDispatch();
    const theme =useTheme();
    

    // const handleChange = (event)=>{
    //     const {movieName,value} = event.target;
    //     setFormFields({[movieName]:value});
        
    // }

    
     const handleChange = (event)=>{
        
         setFormFields({movieName:event.target.value});
         //console.log(formFields);

     }

    

    const handleSubmit = (event)=>{
       // const {movieName , value } = event.target;
        //setFormFields({[movieName]:value});
        //console.log(event.target);
        event.preventDefault();

        //({movieName:event.target.value});
        //setFormFields({[movieName]:movieName})
        searchmovie = movieName;

        try{

            dispatch(selectMovieBySearch(searchmovie));


        }

catch(error){
    console.log(error);

}
        //console.log(searchmovie);


    }

  return (
    <div>
        

        <Box component='form'  onSubmit={handleSubmit}  sx={(theme)=>({

            color:theme.palette.mode==='light' && 'white',
            filter:theme.palette.mode==='light' && 'invert(1)',
          
            [theme.breakpoints.down('sm')]:{
                display:'flex',
                justifyContent:'center',
                marginLeft:'70px',
            
                marginTop:'-10px',
                marginBottom:'10px'
                
            }
        })}>

       
            

            <TextField
                variant='standard'
                size='medium'
                
                id='searchmovies' 
                placeholder='Search'
                name='searchmovies'
                onChange={handleChange}
                //value={movieName}
                
                InputProps={{

                sx:{
                    // "& input":{
                    //     color:theme.palette.mode==='light' && 'black',
                    //     filter:theme.palette.mode==='light' && 'invert(1)',
                    //     [theme.breakpoints.down('sm')]:{
                           

                    //     }
                    //}

                },
                startAdornment: 
                <InputAdornment position="start"><SearchIcon sx={{}}/></InputAdornment>
                }}
            
                
            />
         </Box>
        <div>
            {movieName}
        </div>
           

            {/* <input type="text" name='searchmovies' placeholder="Search..." id='searchmovies' 
             style={{outline:'none', backgroundColor:'transparent',border:'1px solid',color:'white' , height:'40px',width:'250px',fontSize:'15px',padding:'5px'}} >
            
            </input> */}


          
        
    </div>
  )
}

export default SearchMovies