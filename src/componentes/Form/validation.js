const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (props) => {
	const errors = {}
	if(!regexEmail.test(props.username)){
       errors.username = "username no valido"
	}
	if(!props.password){
		errors.password = "contraseña no valida"
	}
	return errors
}

export default validation