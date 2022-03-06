import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { BootstrapDialog } from './Dialog.styled';
import { CustomizedDialogPropsTypes, DialogTitlePropsTypes } from '../../interfaces/types';
import { MAXWidth, SCROLL} from '../../utils/constants'


const BootstrapDialogTitle = (props: DialogTitlePropsTypes) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialog(props: CustomizedDialogPropsTypes) {
  const { contentDialog, infoCostumDialog, open, IsDialogActions, handleClose, } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const fullWidth: boolean = true;

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        maxWidth={MAXWidth}
        scroll={SCROLL}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {infoCostumDialog?.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {contentDialog}
        </DialogContent>
          { 
            IsDialogActions &&
           (<DialogActions >
              <Button autoFocus onClick={ () => handleClose() }>
                Close
              </Button>
            </DialogActions>)
          }
      
      </BootstrapDialog>
    </div>
  );
}
