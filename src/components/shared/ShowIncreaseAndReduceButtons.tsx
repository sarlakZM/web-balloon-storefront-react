import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ShowIncreaseAndReduceButtonsPropsTypes } from '../../interfaces/types';


export default function ShowIncreaseAndReduceButtons(props: ShowIncreaseAndReduceButtonsPropsTypes) {
    const { item, handleAddToCart, handleRemoveFromCart} = props
    return (
        <Box >
            <Button 
                size="small" 
                variant="outlined" 
                aria-label="reduce" 
                onClick={ () => handleRemoveFromCart(item.id)}
                >
            <RemoveIcon fontSize="small" />
            </Button >
            <Button 
                size="small" 
                variant="outlined" 
                aria-label="increase" 
                onClick={ () => handleAddToCart(item)}
                >
            <AddIcon fontSize="small" />
            </Button >
            <Typography variant="subtitle1" color="text.secondary">
                N: {item?.amount} 
            </Typography>
        </Box>
    );
}