import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import styles from './Principal.module.scss'
import { Footer } from "../../components/Footer";

const PaginaPrincipal = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.container__outlet}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default PaginaPrincipal