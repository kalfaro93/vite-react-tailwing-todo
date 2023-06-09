import { useState, useEffect } from "react"
import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"


const iniciaStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {

  const [darkMode, setDarkMode] = useState(iniciaStateDarkMode)

  useEffect(()=>{

    if(darkMode){
      document.documentElement.classList.add('dark')
      //localStorage.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      //localStorage.theme = 'light'
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode])

  return (
    <header className="container mx-auto px-4 pt-8 transition-all duration-1000 md:max-w-xl">
            <div className="flex justify-between">
               <h1 className="uppercase text-white text-3xl  font-semibold tracking-[0.3em]">Todo</h1>
            <button
            onClick={() => setDarkMode(!darkMode)}>

              { darkMode ? <IconSun/> : <IconMoon/>}
            
            </button>
            </div>
              
          </header>
  )
}

export default Header