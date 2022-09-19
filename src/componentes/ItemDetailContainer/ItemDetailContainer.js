import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams }  from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import PacmanLoader from "react-spinners/PacmanLoader"

export const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState(null)
    const [loading, setLoading ] = useState( true)
    const [color, setColor] = useState("#36d6d2");

    const {productoId} = useParams()


    useEffect(()=> {

        setLoading(true)
        setColor("#36d6d2")

        pedirDatos()
        .then((res)=>{
            setProducto( res.find((item)=> item.id === Number(productoId)) )
        })
        .catch(err => console.log(err))
        .finally(()=>{
            setLoading(false)
        })

    }, [])

    return(
        <div>
            {
            loading 
            ?  <PacmanLoader  color={color} loading={loading}  size={100}/>
            : <ItemDetail producto={producto}/>  
            }
       </div>
    )
}

export default ItemDetailContainer