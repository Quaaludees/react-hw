import styles from './SearchForm.module.css';
import { Title } from '../Title/index';
import { Paragraph } from '../Paragraph';
import { TEXT_CONTENT } from './constans';
import Input from '../Input/Input';
import { Button } from '../Button/index.js';
import React, { ChangeEvent, FC, PropsWithChildren, useState } from 'react';
import { ISearchFormProps } from './SearchForm.props';

const SearchForm: FC<PropsWithChildren<ISearchFormProps>> = ({ onSubmit }) => {
    const [inputData, setInputData] = useState('');
    const handleSubmit = () => {
        onSubmit(inputData);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <Title title="ПОИСК" />
            <Paragraph>{TEXT_CONTENT}</Paragraph>
            <Input
                placeholder="Введите название"
                onChange={handleChange}
                isSearch
            />
            <Button onClick={handleSubmit}>Искать</Button>
        </div>
    );
};

export default SearchForm;
