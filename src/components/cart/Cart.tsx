import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { Link as RouterLink} from "react-router-dom";
import { CardStyled } from './Cart.styled';
import { calculateTotalAmoutOfCartItems } from '../../services/ProductService';
import { BalloonTypes, CartPropsTypes} from '../../interfaces/types';
import { ANCHORE } from '../../utils/constants';
import { renderPrice } from '../../utils/helpers';
import CartItem from './CartItem';


const HeaderCart = (props: any) => (
    <CardStyled  sx={{ marginTop: 0.2, 
                       flexDirection: 'row', 
                       padding: 2
                    }}>
          <Typography display="inline"color="text.secondary" sx={{ mr: 2 }} >
            Shopping Cart
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', paddingRight: 5 }}>
            <IconButton
              size="small"
              aria-label="close"
              onClick={ () => props.toggleDrawer() }
              sx={{
                position: 'absolute',
                right: 15,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
              >
              <CloseIcon />
            </IconButton>
          </Box>
    </CardStyled>
  );

const FooterCart = (props: any) => (
    <CardStyled sx={{ padding: 1, 
                      marginTop: 0.2, 
                      flexDirection: 'column', 
                      position:"fixed", 
                      top: 'auto', 
                      bottom: 0  
                    }}>

          <Box sx={{ display: 'flex', 
                     flexDirection: 'row',
                     justifyContent: 'space-between', 
                     paddingRight: 3 
                  }}>
            <Typography display="inline"color="text.secondary" >
              Total:
            </Typography>
            <Typography display="inline"color="text.secondary">
              { renderPrice(calculateTotalAmoutOfCartItems(props?.cartItems).toFixed(2)) }
            </Typography>

          </Box>

          <Box sx={{ display: 'flex', 
                     justifyContent: 'center', 
                     marginTop:1
                  }}>  
            <RouterLink to={ props?.cartItems.length === 0 ? "#" : "/checkout" } style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained" disabled={ props?.cartItems.length === 0 ? true : false }>
                  Proceed To Checkout
                </Button>
            </RouterLink>
          </Box>
    </CardStyled>
  );

export default function Cart(props: CartPropsTypes) {
  const {open, toggleDrawer, handleRemoveFromCart, handleAddToCart, cartItems} = props;
  return (
    <SwipeableDrawer  
          sx={{ maxWidth: 400, 
            zIndex: 'drawer', 
            overflowY: 'auto'
          }}
          anchor={ANCHORE}
          open={open}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >

        <HeaderCart toggleDrawer={toggleDrawer} />

        <Box sx={{overflow: 'scroll', height: "100%",}}>
            {cartItems?.map((item: BalloonTypes) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleAddToCart={handleAddToCart}
                />
              ))
            } 
        </Box>
       
        <FooterCart cartItems={cartItems}/> 
    </SwipeableDrawer>

  );
}
