import './style.scss'

const FormButton = ({ buttonName = "Button"}) => {
  return (
    <div className='formButton-container'><h3>{buttonName}</h3></div>
  )
}

export default FormButton