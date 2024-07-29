import styles from './Link.module.css'

const Link = ({title, count, icon, href}) => {
    return <li className={styles.item}>
        <a className={styles.item} href={href}>
            {title}
            {count && (
                <div className={styles.count}>{count}</div>
            )}
            {icon}
        </a>
    </li>;

}

export default Link;