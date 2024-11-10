import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Skeleton from '@mui/material/Skeleton';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const Material1=()=>{
    const style={
        color:'red',
        background:'blue'
    }
    return(
        <>
        <Button variant="contained" sx={{bgcolor:"red"}}>It s Me</Button>
        <Box>
           <Typography variant="h1" sx={style} gutterBottom>h1. Heading</Typography>
        </Box>
        <Box>
           <Typography variant="h1" sx={{typography:"body1",fontWeight:"bold"}} gutterBottom>h1. Heading</Typography>
        </Box>

        <Box
        sx={{
            width:"400px",
            height:"200px",
            bgcolor:"red",
            mx:"2rem",//right and left
            my:"2rem",//top and buttom
            border:10,//
        }}
        />
        
            
        

            




        </>
    )
}
