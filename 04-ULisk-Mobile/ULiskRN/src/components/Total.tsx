import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ListContextProps } from '../context/ListContext'
import { Product } from '../interfaces/Product.interface'

const Total = () => {

    const {products} = useContext(ListContextProps)
    const [totalReal, setTotalReal] = useState<number>(0)
    const [totalRef, setTotalRef] = useState<number>(0) 

    useEffect(() => {
      const calculoTotal = products.reduce((total: number , price: Product ) =>{
        if(price.inCar === true){
           
            return price ? Number(price.price) + total : total;
        }else{
           return  total
        }

      }, 0)
     
    
      setTotalReal(calculoTotal)
    }, [products])
    
    useEffect(() => {
        const calculoTotalRef = products.reduce((total: number , price: Product ) =>{
              return price ? Number(price.price) + total : total;
  
        }, 0)
       
      
        setTotalRef(calculoTotalRef)
      }, [products])
    

  return (
    <View>
      <Text>Total Referencial: {totalRef} </Text>
      <Text>Total Real: {totalReal} </Text>
    </View>
  )
}

export default Total