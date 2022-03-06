import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export enum Variant {
  'NORMAL',
  'HEART',
  'STAR'
}

export enum Color {
    'RED',
    'PINK',
    'GREEN',
    'BLUE',
    'YELLOW',
    'PURPLE',
    'WHITE',
    'ORANGE',
    'BLACK'
  }
  
export enum SortInput {
    'ID',
    'NAME',
    'PRICE',
    'AVAILABLE_SINCE',
    'COLOR'
}  

export type FilterInput = {
  variant: Variant
  color: Color
}


export type BalloonTypes = {
    id: number
    name: string
    imageUrl: string
    description: string
    color: Color
    variant: Variant
    price: number
    availableSince: string //= new Date().toISOString()
    amount: number
    discout?: number
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';
export type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Scroll = 'body' | 'paper';


export interface CartPropsTypes {
  toggleDrawer: ( open: boolean) => void;
  cartItemsCount: number;
  open: boolean;
  cartItems?: BalloonTypes[]; 
  handleRemoveFromCart : (id: number) => void;
  handleAddToCart : (item: BalloonTypes) => void;   
}

export interface HeaderPropsTypes {
  toggleDrawer: ( open?: boolean) => void;
  cartItemsCount: number;
  title: string;  
}

export interface AppBarPropsTypes extends MuiAppBarProps {
  open?: boolean;
}

export interface FooterPropsTypes {
  description: string;
  title: string;
}

export interface ShowIncreaseAndReduceButtonsPropsTypes {
  handleRemoveFromCart : (id: number) => void;
  handleAddToCart : (item: BalloonTypes) => void;   
  item: BalloonTypes;
}


export interface CartItemPropsTypes extends ShowIncreaseAndReduceButtonsPropsTypes{}

export interface BalloonPropsTypes {
  handleAddToCart : (item: BalloonTypes) => void;   
  item: BalloonTypes;
}

export interface DetailBalloonDialogPropsTypes{
  item: BalloonTypes;

}

export interface CustomButtonOpenDialogPropsTypes {
  typeButton: React.ReactNode;
  titleButton: string;
  IsDialogActions: boolean;
  contentDialog: React.ReactNode;
  infoCostumDialog: {
    title: string
  }
}


export interface DialogTitlePropsTypes {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface CustomizedDialogPropsTypes {
  open: boolean;
  IsDialogActions: boolean;
  contentDialog: React.ReactNode;
  handleClose: () => void;
  infoCostumDialog: {
    title: string
  }
}

export interface CustomIconAddBalloonPropsTypes {
  loading: boolean;
  success: boolean;
  handleWaitingAddToCart: () => void;
}
