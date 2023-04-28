import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.loginbox}>
        <form onSubmit={handleSubmit}>
        <div className={style.userbox}> 
            <label htmlFor="email" style={{ color: "white"}}>Email: </label>
            <input type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            </div>
            
            <hr />
            <div className={style.userbox}> 
            <label htmlFor="password" style={{ color: "white"}}>Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
            </div>
            <center>
            <button> Log in <span></span> </button>  </center>
        </form>
        </div>
    )
}

export default Form;