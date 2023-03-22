
import { IconButton,styled } from "@mui/material";
import {Drawer} from "@mui/material";


import {Toolbar} from "@mui/material";


const drawerWidth = 240;
 export const MyToolBar = styled(Toolbar)(({theme})=>({
      height : '80px',
      display :'flex',
      justifyContent : 'space-between',
      marginLeft : '240px',
      [theme.breakpoints.down('sm')]:{
        marginLeft : '0',
        flexWrap : 'wrap',
      }
    

 }))

 export const MyIconButton = styled(IconButton)(({theme}) =>({
    marginRight : theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        display:'none',
    }

 }))

 export const MyDrawer = styled(Drawer)(({theme})=>({
  [theme.breakpoints.up('sm')]:{
    width : '240px',
    flexShrink : 0,
  }
 }))









// import { makeStyles } from "@mui/material";

// export default makeStyles(()=>({
//     toolbar : {
//         height : '80px',
//         display : 'flex',
//         justifyContent : 'space-between',
//         marginLeft : '240px',
     
//     }
// }))