import { useEffect, useState } from "react";
import { useParams }  from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import Loader from "../loader/Loader";
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState(null)
    const [loading, setLoading ] = useState(true)
    
    const {productoId} = useParams()


    useEffect(() => {

        setLoading(true)

        const docRef = doc(db,"productos", productoId)

        getDoc(docRef)
           .then((doc) => {
            setProducto({id: doc.id, ...doc.data()})
           })
           .finally(() => {
            setLoading(false)
           })
         

    }, [])

    return(
        <div>
            {
            loading 
            ?  <Loader/>
            : <ItemDetail producto={producto}/>  
            }
        </div>
    )
}

export default ItemDetailContainer