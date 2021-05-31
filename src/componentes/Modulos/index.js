import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import Forms from '../Forms'
import style from './style.module.css'
const Modulos = () => {
  const data =  {
    "reserva":  [
      {"label": "N° de mesa", "type":"combo", "name":"mesa"},
      {"label": "Nombre del cliente", "type":"text", "name":"cliente"},
      {"label": "Cantidad de personas", "type": "text", "name":"cantidad"},
      {"label": "Hora de reserva", "type": "text", "name":"hora"}
    ],
    "personal": [
      { "label": "DNI", "type": "text" },
      { "label": "Nombre", "type": "text" },
      { "label": "Apellido", "type": "text" },
      { "label": "fecha", "type": "date" },
      { "label": "Telefono", "type": "text" },
      { "label": "Correo", "type": "email" },
      { "label": "Domicilio", "type": "text" },
      { "label": "sede", "type": "combo" },
    ],
    "sede": [
      { "label": "Nombre", "type": "text" },
      { "label": "Direccion", "type": "text" }
    ]
  }
  const { typeForm} = useContext(FormContext)
  const renderTitle = {
    "reserva": "Reserva de mesas",
    "personal": "Nuevo personal",
    "sede": "Nueva Sede"
  }
  return (
    <div className={style.body}>
      <h2 className={style.title}>{renderTitle[typeForm]}</h2>
      <Forms data={data[typeForm]}/>
    </div>
  )
}
export default Modulos
