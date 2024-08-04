import styles from './MenuItem.module.css';

const MenuItem = ({title, count, icon, href, onClick, isHidden}) => {

    if (isHidden) {
        return null;
    }

    return <li className={styles.item}>
        {
            href ? <a className={styles.item} href={href}>
                {title}
                {count && (
                    <div className={styles.count}>{count}</div>
                )}
                {icon}
            </a> :
                <div onClick={onClick} className={styles.item}>
                    {title}
                    {count && (
                        <div className={styles.count}>{count}</div>
                    )}
                    {icon}
                </div>
        }
    </li>;

};

export default MenuItem;