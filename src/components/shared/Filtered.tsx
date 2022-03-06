import * as React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { Color } from '../../interfaces/types';
import { enumKeys } from '../../utils/helpers';


export default function Filtered() {
  return (
    <Grid item xs={8} md={8}>
        Filter By : 
        {     
            enumKeys(Color).map((value: any) => (
                <Fab size='small' 
                    key={value}                
                    sx={{
                        marginLeft: 1,
                        bgcolor: value,
                        '&:hover': {
                        bgcolor: value,
                        },
                        
                    }}
                >
            </Fab>
            ))
        } 
    </Grid> 
  );
}

