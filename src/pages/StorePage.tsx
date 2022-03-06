import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import LinearProgress from '@mui/material/LinearProgress';
import { BalloonTypes } from "../interfaces/types";
import { getBalloons } from '../services/ProductService';
import Balloon from '../components/balloon/balloon';
import Filtered from '../components/shared/Filtered';
import Sorted from '../components/shared/Sorted';

export default function StorePage(props: any) {
    const {handleAddToCart} = props.passParams;
    const prosucts = getBalloons();
    // if (isLoading) return <LinearProgress />;
    // if (error) return <div>Something went wrong...</div>;
  
  return (
    <Container>               
       <Grid container spacing={2} sx={{ marginBottom:3 }}>
        <Sorted/>
        <Filtered/>
      </Grid>

      <Grid container spacing={2}>
          {prosucts?.map((item: BalloonTypes) => (
              <Grid item key={item.id} xs={12} sm={3} lg={3}>
                <Balloon 
                      item={item} 
                      handleAddToCart={handleAddToCart} 
                    />
              </Grid>
            ))}   
      </Grid>
   </Container>
  );
}

