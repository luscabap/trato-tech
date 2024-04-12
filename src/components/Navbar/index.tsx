import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Busca } from '../Busca';
import {
    RiShoppingCart2Fill,
    RiShoppingCart2Line
} from 'react-icons/ri'

const iconeProps = {
    color: 'white',
    size: 24
}

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src='logo.svg' className={styles.logo}/>
            <div className={styles.links}>
                <div>
                    <a href="/" className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Página Inicial
                    </a>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca />
            </div>
            <div className={styles.icones}>
                <a href="/carrinho">
                    {
                        window.location.pathname === '/carrinho' 
                        ? <RiShoppingCart2Fill {...iconeProps}/>
                        : <RiShoppingCart2Line {...iconeProps}/>
                    }
                </a>
            </div>
        </nav>
    )
}