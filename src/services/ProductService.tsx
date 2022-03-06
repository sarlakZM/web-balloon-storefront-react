import { BalloonTypes } from "../interfaces/types"
import { Data } from '../services/db'

export const getBalloons = () =>  Data ; 

export const getTotalCartItems = (items: BalloonTypes[]) => 
        items.reduce((acc: number, item) => acc + item.amount, 0);

export const calculateTotalAmoutOfCartItems = (items: BalloonTypes[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

