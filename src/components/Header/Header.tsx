import styles from './Header.module.css'
import logo from '../../assets/Ignite_simbol.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}