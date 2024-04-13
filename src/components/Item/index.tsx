import { IItem } from '../../interfaces/IItem';
import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';;
import { FaCartPlus } from 'react-icons/fa'

const iconeProps = {
    size: 24,
    color: "#041833"
}

export const Item = ({ foto, titulo, descricao, preco, favorito }: IItem) => {

    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles.item__info}>
                    <div className={styles.item__preco}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles.item__acoes}>
                        {
                            favorito 
                            ? <AiFillHeart {...iconeProps} color="#FF0000" className={styles.item__acao}/> 
                            : <AiOutlineHeart  {...iconeProps} className={styles.item__acao}/>
                        }
                        <FaCartPlus 
                            {...iconeProps}
                            color={ true ? '#1875E8' : iconeProps.color}
                            className={styles.item__acao}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}