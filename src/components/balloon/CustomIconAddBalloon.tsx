import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { grey, green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { CustomIconAddBalloonPropsTypes } from '../../interfaces/types'

const changeColorStatus = (success: boolean) => {
   return (
        (success ? {
                bgcolor: green[100],
                '&:hover': {
                bgcolor: green[100],
                },
            } :
            {
              color: 'primary'
            }
        )
    ) 
  };


export default function CustomIconAddProduct(props: CustomIconAddBalloonPropsTypes) {
  const { success, loading, handleWaitingAddToCart  } = props
  return (
    <Box sx={{ m: 1, 
               position: 'relative'
             }}>
        <Tooltip title="Add to Cart">
          <IconButton size="small"   
                      aria-label="save"
                      color="primary"
                      sx = {changeColorStatus(success)}
                      onClick={ () => handleWaitingAddToCart()}
                      
                      >
              {   success ? 
                  <CheckIcon aria-label="add to cart" /> : 
                  <AddShoppingCartIcon aria-label="check" />
              }
          </IconButton>
        </Tooltip>
        { loading && (
          <CircularProgress
              size={35}
              sx={{
              color: grey[500],
              position: 'absolute',
              top: -2,
              left: -1,
              zIndex: 1,
              }}
          />
        )}
    </Box>
  );
}
