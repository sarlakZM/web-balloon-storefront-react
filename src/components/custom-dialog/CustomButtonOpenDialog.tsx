import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CustomizedDialog from './CustomizedDialog';
import { CustomButtonOpenDialogPropsTypes } from '../../interfaces/types';


export default function CustomButtonOpenDialog(props: CustomButtonOpenDialogPropsTypes) {
  const { typeButton, titleButton, contentDialog, infoCostumDialog, IsDialogActions } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ m: 1, 
      position: 'relative'
    }}>
      <Tooltip title={titleButton}>
        <IconButton color="primary"  onClick={ () => handleClickOpen() }>
          {typeButton}
        </IconButton>
      </Tooltip>
      <CustomizedDialog  contentDialog={contentDialog} 
                          open={open} 
                          infoCostumDialog={infoCostumDialog}
                          handleClose={handleClose}
                          IsDialogActions={IsDialogActions}
                  />
    </Box>
       
  );
}
