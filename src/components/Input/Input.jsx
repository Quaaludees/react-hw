import React from 'react';
import SearchIcon from "../icons/SearchIcon.jsx";
import styles from './Input.module.css';
import cn from 'classnames'


const Input = ({type, name, value, onChange, isSearch, placeholder}) => {
    return (
        <div className={styles.wrapper}>
            {isSearch && <div className={styles.icon}><SearchIcon/></div>}
            <input className={cn(styles.root, {
                [styles.search]: isSearch
            })}
                   type={type}
                   name={name}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}

            />
        </div>
    );
};

export default Input;