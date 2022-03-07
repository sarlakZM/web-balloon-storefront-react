import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { pink } from '@mui/material/colors';
import CustomRouters from './utils/CustomRouters';
import { getTotalCartItems } from './services/ProductService'
import { BalloonTypes } from "./interfaces/types"
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/cart/Cart';
import { PROJECT_TITLE } from './utils/constants';

const mdTheme = createTheme({
  palette: {
    primary: {
      main: pink[300],
    },
    secondary: {
      main: pink[200],
    },
    
  },
});



export default function App() {
  const [cartItems, setCartItems] = React.useState([] as BalloonTypes[]);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open_: boolean = false): any =>{
    // (event: React.KeyboardEvent | React.MouseEvent): any =>  {
    //   if (
    //     event &&
    //     event.type === 'keydown' &&
    //     ((event as React.KeyboardEvent).key === 'Tab' ||
    //       (event as React.KeyboardEvent).key === 'Shift')
    //   ) {
    //     console.log("test")
    //     return;
    //   }
      console.log(open)
      setOpen(!open);
    };
  
  const handleRemoveFromCart = (id: number) => {
      try{
          setCartItems((prev: any) =>
              prev.reduce((acc: any, item: BalloonTypes) => {
                  if (item.id === id) {
                    if (item.amount === 1) return acc;
                    return [...acc, { ...item, amount: item.amount - 1 }];
                  } else {
                    return [...acc, item];
                  }
              }, [] as BalloonTypes[])
          );
      } catch (error) {
          // this.setState({ error });
          console.log(error)
      }
  };

  const handleAddToCart = (clicked: BalloonTypes) => {
      try {
        setCartItems((prev: any) => {
            const isItemInCart = prev.find((item: BalloonTypes) => item.id === clicked.id);
            if (isItemInCart) {
              return prev.map((item: BalloonTypes) => (item.id === clicked.id ? { ...item, amount: item.amount + 1 } : item));
            }
            return [...prev, { ...clicked, amount: 1 }];
          });
      } catch (error) {
        // this.setState({ error });
        console.log(error)
      }

  };

  const clearCartItems = () => {
    try{
      setCartItems((prev: any) =>
          prev.reduce((acc: any, item: BalloonTypes) => {
              return acc;
          }, [] as BalloonTypes[])
      );
  } catch (error) {
      // this.setState({ error });
      console.log(error)
  }
  }

  const passParams = {
    open: open, 
    toggleDrawer: toggleDrawer ,
    cartItems: cartItems, 
    handleRemoveFromCart: handleRemoveFromCart,
    handleAddToCart: handleAddToCart,
    cartItemsCount: getTotalCartItems(cartItems),
    title: PROJECT_TITLE,
    clearCartItems: clearCartItems,
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Header toggleDrawer={passParams.toggleDrawer}
                 cartItemsCount={passParams.cartItemsCount}
                 title={passParams.title} />

        <Cart open={passParams.open} 
              toggleDrawer={passParams.toggleDrawer}
              cartItemsCount={passParams.cartItemsCount}
              cartItems= {passParams.cartItems}
              handleAddToCart={passParams.handleAddToCart}
              handleRemoveFromCart={passParams.handleRemoveFromCart} 
              />

          <Container sx={{ mt: 3, mb: 3 }}>
            {/* Render your component based url */}
            <CustomRouters passParams={passParams}/>       
          </Container>

          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
      </Container>
    </ThemeProvider>
  );
}

