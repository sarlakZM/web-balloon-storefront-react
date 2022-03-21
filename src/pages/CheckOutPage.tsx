import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BalloonTypes } from '../interfaces/types';
import CartItem from '../components/cart/CartItem';
import { calculateTotalAmoutOfCartItems } from '../services/ProductService';
import AddressForm from '../components/checkout/AddressForm';
import PaymentForm from '../components/checkout/PaymentForm';
import { renderPrice } from '../utils/helpers';

const steps = ['Shipping address', 'Payment details'];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CheckOutPage(props: any) {
  const {handleRemoveFromCart, handleAddToCart, cartItems, clearCartItems} = props.passParams;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){
      clearCartItems();
    } 
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid item key="checkout" xs={12} md={5}> 
            <Typography component="h1" variant="h4" align="center">
                  Orders
            </Typography>           
            {cartItems?.map((item: BalloonTypes) => (
                <CartItem key={item.id} 
                          item={item} 
                          handleRemoveFromCart={handleRemoveFromCart}
                          handleAddToCart={handleAddToCart}
                        />
                ))} 

              <Box sx={{ display: 'flex', 
                         flexDirection: 'row',
                         justifyContent: 'space-between',
                         paddingRight: 10 
                        }}>
                <Typography display="inline"color="text.secondary" >
                  Total:
                </Typography>
                <Typography display="inline"color="text.secondary">
                  { renderPrice(calculateTotalAmoutOfCartItems(props?.cartItems).toFixed(2)) }
                </Typography>
              </Box>    
        </Grid> 
        <Grid item key="orders" xs={12} md={7}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>

              {activeStep === steps.length ? 
                (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your order
                        confirmation, and will send you an update when your order has
                        shipped.
                    </Typography>
                  </React.Fragment>
                ) : 
                (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: 'flex', 
                                justifyContent: 'flex-end' 
                              }}>
                        {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Back
                        </Button>
                        )}
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                            disabled = { cartItems?.length === 0 ? true : false }
                            >
                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                        </Button>
                    </Box>
                  </React.Fragment>
              )}
            </React.Fragment>
        </Grid>
    </Grid>
  );
}