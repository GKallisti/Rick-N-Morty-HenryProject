import style from './Button.module.css';

const Button = (props) => {
    return (
        
        
<button onClick={props.callback} className={style.bottone1}> {props.children} </button>)
   
}

export default Button