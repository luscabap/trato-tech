import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { Busca } from '../Busca';
import {
    RiShoppingCart2Fill,
    RiShoppingCart2Line
} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.svg'

const iconeProps = {
    color: 'white',
    size: 24
}

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={styles.nav}>
            <img src={logo} className={styles.logo} alt='Logo da TratoTech'/>
            <div className={styles.links}>
                <div>
                    <a className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/'
                        })}
                        onClick={() => navigate('/')}
                    >
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