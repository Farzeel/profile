import { useState,useContext,createContext } from "react";

const ThemeContext = createContext();

 const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )

}

 const useTheme = () => useContext(ThemeContext);
 export {ThemeProvider,useTheme};
