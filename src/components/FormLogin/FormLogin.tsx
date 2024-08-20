import { Button } from '../Button/index';
import { Input } from '../Input';
import { Title } from '../Title';
import React, {
    ChangeEvent,
    LegacyRef,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useUserContext } from '../../provider/user';

const FormLogin = () => {
    const { onLogin } = useUserContext();
    const [value, setValue] = useState('');
    const [isValid, setValid] = useState(true);
    const inputRef = useRef<HTMLInputElement>();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const checkValid = (value: string) => {
        return value.trim().length > 0;
    };

    const onBlur = () => {
        setValid(checkValid(value));
    };

    const onClick = () => {
        const isValid = checkValid(value);
        setValid(isValid);
        if (!isValid) {
            inputRef?.current?.focus();
            return;
        }
        onLogin?.(value);
    };

    useEffect(() => {
        inputRef?.current?.focus();
    }, []);

    return (
        <>
            <Title title="ВХОД" />
            <Input
                onBlur={onBlur}
                ref={inputRef as LegacyRef<HTMLInputElement>}
                onChange={onChange}
                isValid={isValid}
                value={value}
                placeholder="Ваше имя"
            />
            <Button onClick={onClick}>Войти в профиль</Button>
        </>
    );
};

export default FormLogin;
