// import { render } from "@testing-library/react"
import React from "react"
import validation from "./validation.js"
import style from "./Form.module.css"
import { Link } from "react-router-dom"
const {formulario} = style


const Form = () => {

const [ userData, setUserData ] = React.useState({
            username:"",
            password:"",
        })

const [ errors, setErrors ] = React.useState({
            username:"",
            password:"",
        })

const handleInputChange = (event) => {
    
    setUserData({
        ...userData,
        [event.target.name] : event.target.value,

    })

    setErrors(validation({
        ...userData,
        [event.target.name] : event.target.value
    }))

}


   
const handleSubmit = (eve) => {
    eve.preventDefault()
    if(!Object.values(errors).length){
        alert('Suceful')
        setErrors({
            username: '',
            password: '',
            validation: validation,
        })
        setUserData({
            username: '',
            password: '',
        })
        
    }
    else alert('debe llenar todos los campos')
}



    return(
        <div className={formulario}> 
        <button className={style.boton}>
            <Link to="/home">Home</Link>

        </button>
          <label>Username:</label>
          <input type="text" value={userData.username} 
          name="username" placeholder="username..." onChange={handleInputChange}
          ></input>
          {/* {errors.username && <p style="color: red">warning</p>} */}
<hr />
          <label>Password:</label>
          <input value={userData.password} 
          type="text" name="password" placeholder="password..." onChange={handleInputChange}
           ></input>
<hr />
           <button type="submit" className={style.enviar} onClick={handleSubmit} >enviar</button>
        </div>
    )
}


export default Form