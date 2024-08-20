import styles from './HeaderLayout.module.css';

const HeaderLayout = ({ children }) => {


    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default HeaderLayout;