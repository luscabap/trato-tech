import styles from './TituloComImagem.module.scss'

interface ITituloComImagem {
    titulo: string,
    descricao: string,
    imagem: string
    className: string,
}

export const TituloComImagem = ({ descricao, titulo, imagem, className }: ITituloComImagem) => {
    return (
        <div className={`${className} ${styles.header}`}>
            <div className={styles.header__texto}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={styles.header__imagem}>
                <img src={imagem} alt={titulo} />
            </div>
        </div>
    )
}