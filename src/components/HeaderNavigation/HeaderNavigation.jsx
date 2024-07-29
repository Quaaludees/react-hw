import styles from './HeaderNavigation.module.css';
import LoginIcon from "../icons/LoginIcon.jsx";
import {Link} from "../Link/index.js";


const HeaderNavigation = () => {


    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <Link href={'#'} title={'Поиск фильмов'}/>
                <Link count={2} title={'Мои фильмы'}/>
                <Link icon={<LoginIcon/>} title={'Войти'}/>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;