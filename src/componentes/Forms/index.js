import { useEffect, useState } from "react"
import Tabla from "../Tabla"
import { createReserva, getMesa, getReserva } from './../../utils/fetchAPI'
import style from './style.module.css'

const Forms = ({data=[]}) => {
  console.log(data);
  const [reservas, setReservas] = useState([{"nro":1, nombre:"Juan Arcos", cantidad:"4",hora:"4"}])
  const [mesas, setMesas] = useState([])
  useEffect(() => {
    getMesa().then(x => setMesas(x))
    getReserva().then(x=> setReservas(x))
  }, [])
  
  const pintarCliente = (reserva) => {
    console.log(reserva);
    setReservas([...reservas, reserva])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { mesa, cliente, cantidad, hora } = e.target
    console.log(mesa);
    const data2 = {
      id_mesa: mesa.value,
      id_estado: 1,
      fechafin_reserva: hora.value,
      fechainicio_reserva: hora.value
    }
    const pintar = {
      nro: mesa.value,
      nombre: cliente.value,
      cantidad: cantidad.value,
      hora: hora.value
    }
    const respuesta = createReserva(data2)
    mesa.value = ''
    cliente.value = ''
    cantidad.value = ''
    hora.value = ''
    
    respuesta.then(x => {
      if (x === 'succes') {
        pintarCliente(pintar)
      }
    })
  }

  const renderInputs = (type, name)=>{
    if(type==="combo"){
      return <select name={name} className={style.input} >
        {mesas.map(e=><option key={e.id_mesa}>{e.id_mesa}</option>)}
      </select>
    }else{
      return <input type={`${type}`} name={name} className={style.input} />
    }
  }
  
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
      {
        data.map(input=>(
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
    {
      data.length === 4
          ? <Tabla data={reservas} />
          : console.log(data)
    }
</>
  )
}
export default Forms
