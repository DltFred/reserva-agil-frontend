const URL = "https://app-reserva-agil.herokuapp.com"

export async function getSede(){
  await fetch(`${URL}/sedes/allSede`)
    .then(res => {
      return res.json()
    })
} 

export const getMesa = ()=>{
  return  fetch(`${URL}/mesas/allMesa`)
    .then(res => res.json())
    .then(data => data)
}

export const getReserva=()=>{
  return fetch(`${URL}/reservas/allReservas`)
    .then(res => res.json())
    .then(data => data)
}

export async function getEmpleado(){
  await fetch(`${URL}/empleados/allEmpleados`)
    .then(res => {
      return res.json()
    })
}

export const createReserva = (data) => {
  return fetch(`${URL}/reservas/saveReserva`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 'succes')

}