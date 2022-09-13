import styles from './Sidebar.module.css'
import wallpaperUsuario from '../../assets/wallpaper.jpg'
import avatar from '../../assets/avatar.png'
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={wallpaperUsuario} className={styles.cover} />
            <div className={styles.profile}>
                <Avatar src={avatar} />
                <strong>Renato Astra</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}