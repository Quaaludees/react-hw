import {Button} from '../Button/index.js';
import {Input} from '../Input/index.js';
import {Title} from '../Title/index.js';
import {useEffect, useRef, useState} from 'react';
import {useUserContext} from '../../provider/user/index.js';


const FormLogin = () => {


    const {onLogin} = useUserContext();
    const [value, setValue] = useState('');
    const [isValid, setValid] = useState(true);
    const inputRef = useRef();

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const checkValid = () => {
        return value.trim().length > 0;

    };

    const onBlur = () => {
        setValid(checkValid(value));
    };

    const onClick = () => {
        const isValid = checkValid(value);
        setValid(isValid);
        if (!isValid) {
            inputRef.current.focus();
            return;
        }
        onLogin(value);

    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    return (
        <>
            <Title title="ВХОД"/>
            <Input onBlur={onBlur} ref={inputRef} onChange={onChange} isValid={isValid} value={value} 
                   placeholder="Ваше имя"/>
            <Button onClick={onClick}>Войти в профиль</Button>
        </>
    );
};

export default FormLogin;