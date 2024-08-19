import styles from './MenuItem.module.css';

const MenuItem = ({title, count, icon, onClick, isHidden}) => {

    if (isHidden) {
        return null;
    }

    return <li className={styles.item}>
        <div onClick={onClick} className={styles.item}>
            {title}
            {count && (
                <div className={styles.count}>{count}</div>
            )}
            {icon}
        </div>

    </li>;

};

export default MenuItem;