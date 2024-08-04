import styles from './HeaderNavigation.module.css';
import MenuItem from '../MenuItem/MenuItem.jsx';


const HeaderNavigation = ({menuItems}) => {


    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {menuItems.map(({href, title, count, icon, onClick, isHidden}, index) => {
                    return <MenuItem key={`${title}_${index}`} href={href} title={title} count={count} icon={icon} onClick={onClick} isHidden={isHidden}/>;
                })}

            </ul>
        </nav>
    );
};

export default HeaderNavigation;