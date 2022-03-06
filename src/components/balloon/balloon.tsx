import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box from '@mui/material/Box';
import CustomIconAddProduct from './CustomIconAddBalloon'
import CustomButtonOpenDialog from '../custom-dialog/CustomButtonOpenDialog';
import DetailBalloonDialog from './DetailBalloonDialog';
import { BalloonPropsTypes } from '../../interfaces/types';


export default function Balloon(props: BalloonPropsTypes) {
  const { item, handleAddToCart } = props
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleWaitingAddToCart = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        handleAddToCart(item);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <Card 
        sx={{ maxWidth: 250 }}
      >
       {item ? (
            <CardMedia
             component="img"
             alt= "Nothing"
             image= {item?.imageUrl}
             sx={{ height: "50", width: "50"}}
           />
          ) : (
            <Skeleton variant="rectangular" height={250} />
          )
        }  

      <CardContent>
        <Typography gutterBottom component="div">
          {item?.name}
        </Typography>
        <Box>
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
          {item?.discout ?
              (
                <Typography display="inline" 
                            sx={{ mr: 2 , 
                                  textDecoration: 'line-through', 
                                  color:'gray'}} 
                            >
                  ${item?.price}
                </Typography>
              )
            :
              ('')
            }  
        </Box>

      </CardContent>
      <CardActions>  
        <CustomIconAddProduct 
                    success={success} 
                    loading={loading} 
                    handleWaitingAddToCart={handleWaitingAddToCart}
                    />
    
        <CustomButtonOpenDialog 
                IsDialogActions= {false}
                typeButton={ <ZoomOutMapIcon />} 
                contentDialog= {<DetailBalloonDialog 
                                    item={item} 
                                  />} 
                infoCostumDialog={ { title: 'Detail Balloon'} }
                titleButton={"Show Details"} 
                />
          
        <Tooltip title="Add to favorites">
          <IconButton color="primary"  aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Share to others">
        <IconButton color="primary" aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
        
      </CardActions>
    </Card>
  );
}
