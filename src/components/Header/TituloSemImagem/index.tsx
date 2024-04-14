import styles from './TituloSemImagem.module.scss'

interface ITituloSemImagem {
    titulo: string,
    descricao: string
}

export const TituloSemImagem = ({ descricao, titulo }: ITituloSemImagem) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <h2 className={styles.descricao}>{descricao}</h2>
        </div>
    )
}