import styles from './SearchForm.module.css';
import {Title} from '../Title/index.js';
import {Paragraph} from '../Paragraph/index.js';
import {TEXT_CONTENT} from './constans';
import Input from '../Input/Input.jsx';
import {Button} from '../Button/index.js';
import {useState} from 'react';

const SearchForm = ({ onSubmit }) => {

    const [inputData, setInputData] = useState('');
    const handleSubmit = () => {
        onSubmit(inputData);
    };

    const handleChange = (event) => {
        setInputData(event.target.value);
    };
    
    
    return (
        <div className={styles.wrapper}>
            <Title title="ПОИСК"/>
            <Paragraph>{TEXT_CONTENT}</Paragraph>
            <Input placeholder="Введите название" onChange={handleChange} isSearch/>
            <Button onClick={handleSubmit}>Искать</Button>
        </div>
    );
};

export default SearchForm;