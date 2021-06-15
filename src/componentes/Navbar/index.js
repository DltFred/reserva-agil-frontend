import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import style from './style.module.css'
const Navbar = ({ visible }) => {
  const clase = visible
    ? `${style.navbar}`
    : `${style.navbar} ${style.none}`
  const { setTypeForm } = useContext(FormContext)
  const handleClick = (tipo) => {
    setTypeForm(tipo)
  }
  return (
    <div className={clase}>
      <ul className={style.lista}>
        <li onClick={() => handleClick("reserva")}>Reservas</li>
        <li onClick={() => handleClick("personal")}>Personal</li>
      </ul>
      <ul className={style.contacto}>
        <li>Números de Contacto</li>
        <li>999999999</li>
        <li>888888888</li>
      </ul>
    </div>
  )
}
export default Navbar
