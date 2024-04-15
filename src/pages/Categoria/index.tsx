import { useSelector } from "react-redux"
import { Header } from "../../components/Header"
import { useParams } from "react-router-dom"
import { ICategoria } from "../../interfaces/ICategoria";
import { IItem } from "../../interfaces/IItem";
import styles from './Categoria.module.scss'
import { Item } from "../../components/Item";
import { RootState } from "@reduxjs/toolkit/query";

interface SelectorPaginaCategoria {
    categoria: ICategoria,
    itens: IItem[],
}

export const PaginaCategoria = () => {
    const { nomeCategoria } = useParams();
    const { categoria, itens }: SelectorPaginaCategoria = useSelector((state: RootState) => {
        const regexp = new RegExp(state.busca, 'i')

        return {
            categoria: state.categorias.find((categoria: ICategoria) => categoria.id === nomeCategoria),
            itens: state.itens.filter((item: IItem) => item.categoria === nomeCategoria && item.titulo.match(regexp))
        }
    })

    return (
        <div>
            <Header 
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
            <div className={styles.itens}>
                {itens?.map(item => (
                    <Item 
                        key={item.id}
                        categoria={item.categoria}
                        descricao={item.descricao}
                        favorito={item.favorito}
                        foto={item.foto}
                        id={item.id}
                        preco={item.preco}
                        titulo={item.titulo}
                    /> 
                ))}
            </div>
        </div>
    )
}