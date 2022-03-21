import { CURRENCY } from "./constants";

export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
    return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}


export const renderPrice = (price: number | string) =>  `${ CURRENCY.split('-')[0] } ${price}`
   