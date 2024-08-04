import styles from'./Button.module.css';
import cn from 'classnames';


const Button = ({ children, onClick, type='button', variants = 'button', className= ''}) => {


    return (
        <button className={cn(className, {
            [styles['button']] : variants === 'button',
            [styles['text']] : variants === 'text'
        })} type={type} onClick={onClick}>{children}</button>
    );
};

export default Button;