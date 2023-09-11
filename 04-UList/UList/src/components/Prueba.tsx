import React, { useContext } from 'react'
import { ListContext } from '../context/listContect'

const Prueba = () => {

    const {products} = useContext(ListContext)

    console.log(products)

  return (



    <div>Prueba</div>
  )
}

export default Prueba