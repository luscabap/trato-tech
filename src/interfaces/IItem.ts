export interface IItem {
    titulo: string,
    descricao: string,
    foto: string,
    favorito: boolean,
    preco: number,
    id: string,
    categoria: string,
    carrinho?: boolean,
    quantidade?: number
}