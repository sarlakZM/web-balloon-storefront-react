import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { CardStyled } from './Cart.styled';
import ShowIncreaseAndReduceButtons from '../shared/ShowIncreaseAndReduceButtons'
import { CartItemPropsTypes} from '../../interfaces/types';
import { renderPrice } from '../../utils/helpers';


export default function CartItem(props: CartItemPropsTypes) {
  const {item, handleRemoveFromCart, handleAddToCart} = props;    
  return (
      <CardStyled sx={{ flexDirection: 'row', 
                        marginTop: 0.5, 
                        padding: 1 
                      }}>
        <Box sx={{ display: 'flex', 
                  flexDirection: 'row', 
                  justifyContent: 'space-between'
                }}>
          <CardMedia
              component="img"
              sx={{ width: 70, height: 80, paddingRight:1}} 
              image= {item?.imageUrl}
              alt="Noting"
          />
          <CardContent sx={{ flex: '1', 
                              padding:0 
                          }}>
            <Typography variant="subtitle1" gutterBottom >
              {item?.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
               { renderPrice(item?.price) }
            </Typography>
          </CardContent>
        </Box>
        <ShowIncreaseAndReduceButtons
            handleRemoveFromCart={handleRemoveFromCart}
            handleAddToCart={handleAddToCart}
            item={item}
        />

      </CardStyled>
  );
}
