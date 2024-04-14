import { useSelector } from 'react-redux'
import { Header } from '../../components/Header'
import styles from './Carrinho.module.scss'
import { Item } from '../../components/Item';
import { IItem } from '../../interfaces/IItem';

export const PaginaCarrinho = () => {
    const carrinho: IItem[] = useSelector(state => {
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade
            })
            return itens
        }, []);
        return carrinhoReduce
    });

    return (
        <div>
            <Header 
                titulo='Carrinho de compras'
                descricao='Confira produtos que você adicionou ao carrinho.'
            />
            <div className={styles.carrinho}>
                {
                    carrinho.map(item => (
                        <Item 
                            key={item.id} 
                            categoria={item.categoria}
                            descricao={item.descricao}
                            favorito={item.favorito}
                            foto={item.foto}
                            id={item.id}
                            preco={item.preco}
                            titulo={item.titulo}
                            carrinho
                        />)
                    )
                }
                <div className={styles.total}>
                    <strong>
                        Resumo da Compra
                        <span>Subtotal: <strong>R$ {10.0.toFixed(2)}</strong></span>
                    </strong>
                </div>
            </div>
        </div>
    )
}