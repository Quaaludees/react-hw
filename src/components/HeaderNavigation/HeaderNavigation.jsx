import './HeaderNavigation.css';
import LoginIcon from "../icons/LoginIcon.jsx";


function Link({title, count, icon, href}) {
    return <li className='header-navigation__list__item'>
        <a className='header-navigation__list__item' href={href}>
            {title}
            {count && (
                <div className='link-count'>{count}</div>
            )}
            {icon}
        </a>
    </li>;

}

function HeaderNavigation() {


    return (
        <nav className='header-navigation'>
            <ul className='header-navigation__list'>
                <Link href={'#'} title={'Поиск фильмов'}/>
                <Link count={2} title={'Мои фильмы'}/>
                <Link icon={<LoginIcon/>} title={'Войти'}/>
            </ul>
        </nav>
    );
}

export default HeaderNavigation;