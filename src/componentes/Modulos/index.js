import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import Forms from '../Forms'
import style from './style.module.css'
const Modulos = () => {
  const data = {
    "reserva": [
      { "label": "Sede", "type": "combo", "name": "sede" },
      { "label": "Nombre del cliente", "type": "text", "name": "nombre" },
      { "label": "Apellido del cliente", "type": "text", "name": "apellido" },
      { "label": "Cantidad de personas", "type": "text", "name": "cantidad" },
      { "label": "Fecha de reserva", "type": "datetime-local", "name": "fecha" },
      { "label": "Telefono del cliente", "type": "text", "name": "telefono" }
    ],
    "personal": [
      { "label": "Sede", "type": "combo", "name": "sede" },
      { "label": "Nombre", "type": "text", "name": "nombre" },
      { "label": "Apellido", "type": "text", "name": "apellido" },
      { "label": "Telefono", "type": "text", "name": "telefono" },
      { "label": "Correo", "type": "email", "name": "correo" },
      { "label": "Rol", "type": "combo", "name": "rol" },
    ],
  }
  const { typeForm } = useContext(FormContext)
  const renderTitle = {
    "reserva": "Realizar reserva",
    "personal": "Nuevo personal",
  }
  return (
    <div className={style.body}>
      <h2 className={style.title}>{renderTitle[typeForm]}</h2>
      <Forms data={data[typeForm]} />
    </div>
  )
}
export default Modulos
