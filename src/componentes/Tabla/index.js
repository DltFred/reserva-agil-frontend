import { useContext, useEffect, useState } from 'react'
import FormContext from '../../context/FormContext'
import { getEmpleados, getReservas } from '../../services/fetchAPI'
import style from './style.module.css'

const Tabla = (addReservas) => {
  const columnsHeader = {
    reserva: ["nombre", "apellido", "telefono", "sede", "Nro personas", "fecha"],
    personal: ["nombre", "apellido", "telefono", "email", "sede", "rol"],
  }
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])
  const { typeForm } = useContext(FormContext)
  console.log(data)
  useEffect(() => {
    if (typeForm === "reserva") {
      getReservas().then(res => {
        setData(res)
        setColumns(columnsHeader.reserva)
      })
    }
    if (typeForm === "personal") {
      getEmpleados().then(res => {
        setData(res)
        setColumns(columnsHeader.personal)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addReservas, typeForm])

  return (
    <table id='tabla' className={style.tabla}>
      <thead>
        <tr>
          {columns.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((x, index) =>
          <tr key={index}>
            {columns.map(column => <td key={column}>{(column === "Nro personas") ? x["cant_personas"] : x[column]}</td>)}
          </tr>)}
      </tbody>
    </table>
  )
}
export default Tabla
