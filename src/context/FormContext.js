import React, { useState } from 'react'
const Context = React.createContext()
export function FormContextProvider({children}){
  const [typeForm, setTypeForm] = useState("reserva")
  return <Context.Provider value={{typeForm, setTypeForm}}>
    {children}
  </Context.Provider>
}
export default Context