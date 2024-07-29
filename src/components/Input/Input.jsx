import React from 'react';
import SearchIcon from "../icons/SearchIcon.jsx";
import './Input.css';

const Input = ({type, name, value, onChange, isSearch, placeholder}) => {
    return (
        <div className='input-wrapper'>
            {isSearch && <div className='input-wrapper__icon'><SearchIcon/></div>}
            <input className={!isSearch ? 'input-wrapper__input' : 'input-wrapper__input input-wrapper__input__search'}
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