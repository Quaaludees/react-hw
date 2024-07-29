import styles from './Header.module.css';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation.jsx";


const Header = () => {


    return (
        <header className={styles.header}>
            <img className='logo' src="/logo.svg" alt="Логотип"/>
            <HeaderNavigation/>
        </header>
    );
}

export default Header;