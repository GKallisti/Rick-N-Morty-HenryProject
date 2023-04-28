const validation = (userData,errors,setErrors) =>{
if(!userData.username ) 
setErrors({...errors, username: "Por favor ingresa tu email"})
else if(userData.username.length > 35) 
setErrors ({...errors, username: "El email no puede superar los 35 caracteres"})
else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))
{setErrors({...errors, username: "Email invalido"})}

}




export default validation