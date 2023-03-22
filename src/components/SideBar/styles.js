import {styled} from '@mui/material/styles';
import { Link } from 'react-router-dom';


// const PREFIX = 'SideBar';
// export const classes = {
//     imageLink : `${PREFIX}-root`,
    
// }

// export const Root = styled('Fragment')(({theme})=>({
//     [`&.${classes.imageLink}`]:{

//     }
// }))

export const imageLink  = styled(Link)(({theme})=>({

    color : 'green'

}) )