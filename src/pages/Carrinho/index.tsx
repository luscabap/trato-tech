import { useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { ICarrinho } from '../../interfaces/ICarrinho';
import styles from './Carrinho.module.scss';

export const PaginaCarrinho = () => {
    const { carrinho, total }: ICarrinho = useSelector(state => {
        let total = 0
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade)
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade
            })
            return itens
        }, []);
        return {
            carrinho: carrinhoReduce,
            total
        }
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
                            quantidade={item.quantidade}
                        />)
                    )
                }
                <div className={styles.total}>
                    <strong>
                        Resumo da Compra
                        <span>Subtotal: <strong>R$ {total.toFixed(2)}</strong></span>
                    </strong>
                </div>
            </div>
        </div>
    )
}