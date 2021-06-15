import { useContext, useState } from 'react'
import FormContext from '../../context/FormContext'
import { createEmpleado, createReserva } from '../../services/fetchAPI'
import Tabla from "../Tabla"
import style from './style.module.css'

const Forms = ({ data = [] }) => {
  console.log(data)
  const sedes = [{ id: 1, sede: "sede Marsano" }, { id: 2, sede: "sede San Borja" }, { id: 3, sede: "sede Miraflores" }, { id: 4, sede: "sede Caminos del inca" }]
  const rol = [{ id: 1, rol: "Mesas" }, { id: 2, rol: "Cocina" }]
  const [reserva, setReserva] = useState(false)
  const { typeForm } = useContext(FormContext)
  //sacar a un archivo
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeForm === "reserva") {
      const { sede, nombre, apellido, cantidad, fecha, telefono } = e.target
      const newReserva = {
        "nombre": nombre.value,
        "apellido": apellido.value,
        "fecha": fecha.value,
        "telefono": telefono.value,
        "cantPersonas": cantidad.value,
        "sede": sede.value,
      }
      const respuesta = createReserva(newReserva)

      respuesta.then(x => {
        setReserva(!reserva)
        console.log(x)
      })
    }
    if (typeForm === "personal") {
      const { sede, nombre, apellido, telefono, correo, rol } = e.target
      const newEmpleado = {
        "nombre": nombre.value,
        "apellido": apellido.value,
        "email": correo.value,
        "telefono": telefono.value,
        "rol": rol.value,
        "sede": sede.value,
      }
      const respuesta = createEmpleado(newEmpleado)

      respuesta.then(x => {
        setReserva(!reserva)
        console.log(x)
      })
    }

  }

  const renderInputs = (type, name) => {
    if (type === "combo") {
      return <select name={name} className={style.input} >
        {(name === "sede") ? sedes.map(e => <option key={e.id}>{e.sede}</option>) : rol.map(e => <option key={e.id}>{e.rol}</option>)}
      </select>
    } else {
      return <input type={`${type}`} name={name} className={style.input} />
    }
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        {
          data.map(input => (
            <label key={input.label} className={style.label}>
              {input.label}
              {
                renderInputs(input.type, input.name)
              }

            </label>
          ))
        }
        <button className={style.submit}>Registrar</button>
      </form>
      <Tabla addReservas={reserva} />
    </>
  )
}
export default Forms
