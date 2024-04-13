import { IHeader } from '../../interfaces/IHeader'
import styles from './Header.module.scss'

export const Header = ({ titulo, descricao, imagem, className = '' }: IHeader) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.header__texto}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles.header__imagem}>
                <img src={imagem} alt={titulo} />
            </div>
        </header>
    )
}