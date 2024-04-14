import { IItem } from "./IItem";

export interface ICarrinho {
    carrinho: IItem[],
    total: number
}