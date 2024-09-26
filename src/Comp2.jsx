import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App'
function Comp2() {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        
        <div>
        
            
                <div>The theme is {theme}</div>
                <button onClick={handleToggleTheme}>
                Change To {theme === "dark" ? "Light" : "Dark"} Theme
            </button>
        
        </div>
    )
}

export default Comp2
