import { useState } from 'react'
import { FormContextProvider } from '../../context/FormContext'
import Modulos from '../Modulos'
import Navbar from '../Navbar'
import style from './style.module.css'
const Layout = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  const handleClose = (e) => {
    console.log(e.target.name)
    if (e.target.name === "menu") {
      setVisibleMenu(true)
    } else {
      setVisibleMenu(false)
    }
  }
  return (
    <FormContextProvider>
      <div className={style.layout} onClick={handleClose}>
        <h1 className={style.tittle}>Reserva Agil</h1>
        <div className={style.menu}>
          <img name={"menu"} src={visibleMenu ? "./menux.svg" : "./menu.svg"} alt="menu" />
        </div>
        <Navbar visible={visibleMenu} />
        <Modulos />
      </div>
    </FormContextProvider>
  )
}
export default Layout
