import useQuisco from "../hooks/useQuiosco"

export default function Categoria({categoria})
{
    const {handleClickCategoria}=useQuisco()
    const {icono, id, nombre}= categoria

    return(
        <div className="flex items-center gap-4 border w-full font p-3 hover:bg-amber-600 cursor-pointer  "> 
            <img 
            src={`/img/icono_${icono}.svg`}
            className="w-12"
            />
            <button className="text-lg font-bold truncate  "
             type="button"
             onClick={handleClickCategoria}
            >
                {nombre}
            
            </button>
        </div>


    )
}
