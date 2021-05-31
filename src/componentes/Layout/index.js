import { useState } from 'react'
import { FormContextProvider } from '../../context/FormContext'
import Modulos from '../Modulos'
import Navbar from '../Navbar'
import style from './style.module.css'
const Layout = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const handleClick =()=>{
    setVisibleMenu(!visibleMenu)
  }
  return (
    <FormContextProvider>
      <div className={style.layout}>
        <h1 className={style.tittle}>Reserva Agil</h1>
        <div className={style.menu} onClick={handleClick}>
          <img src={visibleMenu ? "./menux.svg" : "./menu.svg"} alt="menu" />
        </div>
        <Navbar visible={visibleMenu} />
        <Modulos />
      </div>
    </FormContextProvider>
  )
}
export default Layout
