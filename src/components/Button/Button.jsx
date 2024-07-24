import './Button.css';

const variantsMaps = {
    button: 'button',
    text: 'button-text'
}

function Button({ children, onClick, type='button', variants = 'button', className= ''}) {


    return (
        <button className={[variantsMaps[variants],className].join(' ')} type={type} onClick={onClick}>{children}</button>
    );
}

export default Button;