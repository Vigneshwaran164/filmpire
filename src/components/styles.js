// import { makeStyles } from "@mui/styles";
 //import { createTheme , ThemeProvider
  //} from "@mui/materials/styles";




// import { makeStyles } from 'tss-react/mui';



// export const useStyles = makeStyles()((theme)=>{
//     return{
//         root:{
//             height: '100%',
//             display:'flex',
//         },
//         toolbar:{
//             height:'70px',
//         },
//         content:{
//             flexGrow:'1',
//             padding:'2em'
//         }
//     }
// })

 import { styled } from "@mui/material";

 const PREFIX = 'App';



 export const Root = styled('div')({
     height : '100%',
     display : 'flex',
 })

 export const ToolBar = styled('div')({
     height : '70px',
 })

 export const Content = styled('main')({
     flexGrow : '1',
     padding : '2em',
 })





//  const theme = createTheme();   
// export default makeStyles((theme)=>({

//      root:{
//          display : 'flex',
//          height : '100%', 
//      },
//     // toolbar:{
//     //     height : '70px',
        

//     // },
//     // content:{
//     //     flexGrow : '1',
//     //     padding : '2em',
//     // }

// }))