import { createContext, useState, useContext, useEffect } from "react"

const initialState = {
    info: {
        numDocumento: "",
        tipoDocumento: "dni",
        celular: ""
    },
    user: {
        name: "",
        lastName: "",
        birthDay: "",
        age: 0
    },
    plan: {
        titulo: "",
        precio: ""
    },
    paso: 1
}

const initLocalStorage = () => {
    const appValues = localStorage.getItem("appValues") ? JSON.parse(localStorage.getItem("appValues")) : initialState
    return appValues
}

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [appValues, setAppValues] = useState(initLocalStorage())

    useEffect(() => {
        localStorage.setItem("appValues", JSON.stringify(appValues))
    }, [appValues])

    return (
        <AppContext.Provider value={{ appValues, setAppValues }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}