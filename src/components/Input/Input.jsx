import React, {forwardRef} from 'react';
import SearchIcon from '../icons/SearchIcon.jsx';
import styles from './Input.module.css';
import cn from 'classnames';


const Input = forwardRef (({isValid = true, isSearch, ...props}, ref) => {
    return (
        <div className={styles.wrapper}>
            {isSearch && <div className={styles.icon}><SearchIcon/></div>}
            <input className={cn(styles.root, {
                [styles.search]: isSearch,
                [styles.invalid]: !isValid
            })}

                   ref={ref}
                   {...props}

            />
        </div>
    );
});
Input.displayName = 'Input';
export default Input;