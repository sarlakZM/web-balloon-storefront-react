import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import { Color, DetailBalloonDialogPropsTypes} from '../../interfaces/types';
import { enumKeys } from '../../utils/helpers';
import CustomRating from '../shared/CustomRating';

export default function DetailBalloonDialog(props: DetailBalloonDialogPropsTypes) {
    const { item } = props
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
              {item ? (
                  <CardMedia
                    component="img"
                    image= {item?.imageUrl}
                    alt= "Nothing"
                  />
                ) : (
                  <Skeleton variant="rectangular" height={380} />
                )
              }  

              <Typography 
                    display="inline" 
                    variant="h6" 
                    color="text.secondary" 
                    sx={{ mr: 2, 
                          color: 'success.dark',
                          display: 'inline',
                          fontWeight: 'bold',
                          mx: 0.5,
                          fontSize: 14,
                      }} 
                >
                  ${item?.price}
                {/* {`${item?.price} • ${item?.description}`} */}
              </Typography>
              {item?.discout &&
                  (
                    <Typography display="inline" 
                                sx={{ mr: 2 , 
                                      textDecoration: 'line-through', 
                                      color:'gray'}} 
                                >
                      ${item?.price}
                    </Typography>
                  ) 
                }  

              <CustomRating />

          </Grid>
          <Grid item xs={6} md={8}>
            <Typography gutterBottom component="h3">
              {item?.name}
            </Typography>
            <Divider />
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              {     
                enumKeys(Color).map((value: any) => (
                  <Fab size="small"                       
                       sx={{
                         bgcolor: value,
                          '&:hover': {
                           bgcolor: value,
                          },
                       }}
                  >
                </Fab>
                ))
              
              } 
            </Box>  
            <Divider />
            <Typography gutterBottom variant="subtitle1"  color="text.secondary">
              Product Description: 
            </Typography>
            <Typography gutterBottom variant="subtitle1"  color="text.secondary">
              {item?.description}
            </Typography>
          </Grid>
        
        </Grid>
      </Box>
    
    );
  }

