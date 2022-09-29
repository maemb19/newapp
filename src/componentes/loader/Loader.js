import React from "react";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader"


export const Loader = ()  =>{
  const [color, setColor] = useState();
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    setLoading(true)
    setColor("#36d6d2")
  })

  return(
    <div>
      <PacmanLoader  color={color} loading={loading}  size={100}/>
    </div> 
  )
}

export default Loader;