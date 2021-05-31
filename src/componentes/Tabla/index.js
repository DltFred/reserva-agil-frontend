import style from './style.module.css'
const Tabla = ({data}) => {
  console.log(data);
  return (
    <table id='tabla' className={style.tabla}>
      <thead>
        <th>N° Mesa</th>
        <th>Cliente</th>
        <th>Cantidad</th>
        <th>Hora</th>
      </thead>
      <tbody>
        {data.map(x =>
          <tr>
            <td>{x.nro}</td>
            <td>{`${x.nombre}`}</td>
            <td>{x.cantidad}</td>
            <td>{x.hora}</td>
          </tr>)}
      </tbody>
    </table>
  )
}
export default Tabla
