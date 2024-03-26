
import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias";


const QuioscoContext=createContext();

const QuioscoProvider= ({children}) =>{

    const [categorias, setCategorias]=useState(categoriasDB);

    //hacer que se muestre las categorias arriba " el nombre"
    const [categoriaActual, setCategoriaActual]=useState(categorias[0])

    const handleClickCategoria = () =>{
        console.log('click en categoria')
    }


    return(
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria
        }}>
        {children}</QuioscoContext.Provider>

    )
}

export {
    QuioscoProvider
}
export default QuioscoContext