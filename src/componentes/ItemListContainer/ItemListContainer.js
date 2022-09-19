import React, { useEffect, useState } from 'react'
import { ItemList } from '../itemList/ItemList'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from "react-router-dom"
import PacmanLoader from "react-spinners/PacmanLoader"
  

export const ItemListContainer = () => {

  const [ items, setItems] = useState([])
  const [loading, setLoading] =useState(true)
  const [color, setColor] = useState();

  const { categoryId } = useParams() 
  
  
  useEffect(() => {
    setLoading(true)

    setColor("#36d6d2")

    pedirDatos()
     .then( (data) => {
        if (!categoryId){
         setItems(data)
        }else{
          setItems( data.filter((item)=> item.category === categoryId) )
        }
     })
     .catch ((error) => {
         console.log(error)
     })
    .finally(()=>{
      setLoading(false)
    })

  }, [categoryId])

  return (
      <div>
        {
          loading ? <PacmanLoader  color={color} loading={loading}  size={100} />
          :<ItemList items={items}/> 
        }
     </div>
  )
}

export default ItemListContainer