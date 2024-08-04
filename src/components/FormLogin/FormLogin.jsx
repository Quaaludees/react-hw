import {Button} from '../Button/index.js';
import {Input} from '../Input/index.js';
import {Title} from '../Title/index.js';
import {useEffect, useRef, useState} from 'react';


const FormLogin = ({ state, setState }) => {

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
        if (isValid) {
            const user = state?.find((el) => el.name === value);
            if (!user) {
                setState([
                    ...state.map(el => ({
                        ...el,
                        isLogin: false
                    })),
                    {
                        name: value,
                        isLogin: true
                    }
                ]);
                return;
            }
            setState(state.map((el) => {
                if (el.name === value) {
                    return {
                        ...el,
                        isLogin: true
                    };
                }
                return {
                    ...el,
                    isLogin: false
                };
            }));
            return;
        }
        inputRef.current.focus();
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