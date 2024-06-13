import styles from './header.module.css'
import logo from '../../assets/bitcoin.png'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header className={styles.container}>
            <Link to="/">
                <img src={logo} alt="Logo cripto" />
            </Link>
        </header>
    )
}