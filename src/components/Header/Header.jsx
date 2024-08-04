import styles from './Header.module.css';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';
import LoginIcon from '../icons/LoginIcon.jsx';
import UserIcon from '../icons/UserIcon.jsx';



const Header = ({ state, setState, currentUser}) => {


    console.log(currentUser);

    const logout = () => {
        setState(state.map(el => {
            if (el.name === currentUser.name) {
                return {
                    ...el,
                    isLogin: false
                };
            }
            return el;
        }));

    };
    
    
    const menuItems = [
        { href: '#', title: 'Поиск фильмов' },
        { href: '#', title: 'Мои фильмы', count: 2 },
        { href: '#', title: currentUser?.name, icon: <UserIcon />, isHidden: !currentUser },
        { onClick: logout, title: currentUser ? 'Выйти' : 'Войти' , icon: <LoginIcon /> }

    ];


    return (
        <header className={styles.header}>
            <img className='logo' src="/logo.svg" alt="Логотип"/>
            <HeaderNavigation menuItems={menuItems}/>
        </header>
    );
};

export default Header;