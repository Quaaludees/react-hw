import './Header.css';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation.jsx";


function Header() {


    return (
        <header className='header'>
            <img className='logo' src="/logo.svg" alt="Логотип"/>
            <HeaderNavigation/>
        </header>
    );
}

export default Header;