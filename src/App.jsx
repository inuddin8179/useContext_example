import React from 'react'
import './App.css'
import { createContext,useState } from 'react'
import Comp1 from './Comp1'
const ThemeContext =createContext()
function App() {
  
  const [theme, setTheme] = useState("dark")
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`app ${theme}`}> 
                <h1>Theme Context Example</h1>
                <Comp1 />
            </div>
    </ThemeContext.Provider>
    </>
  )
}
export {ThemeContext};
export default App

