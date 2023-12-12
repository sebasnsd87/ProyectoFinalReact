//COMPONENTE ENCARGADO DE PROVEER DATOS Y FUNCIONALIDADES

//IMPORTAMOS HOOKS Y EL CONTEXTO
import React, {useState} from "react";
import ThemeContext from "./ThemeContext";

//ESTRUCTURA DEL COMPONENTE PROVIDER
const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

   

   
    return(
        <ThemeContext.Provider value={
            {
                darkMode,
                setDarkMode,
                toggleDarkMode,
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider