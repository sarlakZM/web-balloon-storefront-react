import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { HeaderPropsTypes } from '../interfaces/types';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Header(props: HeaderPropsTypes) {
  const {toggleDrawer, cartItemsCount, title} = props;
  return (
    <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, 
                       borderColor: 'divider' 
                     }}>
            <RouterLink to="/" >
                <Button size="small">
                 <CardMedia
                        component="img"
                        sx={{ width: 80, 
                              height:80, 
                              paddingRight:1, 
                              display: { xs: 'none', sm: 'block' } 
                            }}
                        image= "/Logo.png"
                        alt="Noting"  
                 /> HomePage
                </Button>
            </RouterLink>
            <Typography
                component="h2"
                variant="h5"
                color='primary'
                align="center"
                noWrap
                sx={{ flex: 1 }}
                >
            {title}
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* <IconButton> */}
            {/* <SearchIcon />
            </IconButton> */}
            <IconButton color="primary"
                        onClick={ cartItemsCount === 0 ? () => null : ()  => toggleDrawer()  }>
                <Badge badgeContent={cartItemsCount} showZero color="success">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Toolbar>
    </React.Fragment>
  );
}