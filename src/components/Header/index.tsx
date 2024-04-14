import { IHeader } from '../../interfaces/IHeader'
import styles from './Header.module.scss'
import { TituloComImagem } from './TituloComImagem'
import { TituloSemImagem } from './TituloSemImagem'

export const Header = ({ titulo, descricao, imagem, className = '' }: IHeader) => {
    return (
        <header className={`${styles.header}`}>
            {
                titulo && !imagem &&
                <TituloSemImagem 
                    titulo={titulo}
                    descricao={descricao}
                />
            }
            {
                titulo && imagem &&
                <TituloComImagem 
                    className={className}
                    descricao={descricao}
                    imagem={imagem}
                    titulo={titulo}
                />
            }
        </header>
    )
}