const URL = "https://us-central1-reserva-agil.cloudfunctions.net/api"
// const URL = "http://127.0.0.1:5001/reserva-agil/us-central1/api"


export const getReservas = () => {
  return fetch(`${URL}/reservas`)
    .then(res => res.json())
    .then(data => {
      if (data) return data
      return [{ message: "no hay datos" }]
    })
}

export function getEmpleados() {
  return fetch(`${URL}/empleados`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data) return data
      return [{ message: "no hay datos" }]
    })
}

export const createReserva = (data) => {
  return fetch(`${URL}/reservas`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 'succes')
}
export const createEmpleado = (data) => {
  return fetch(`${URL}/empleados`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 'succes')
}