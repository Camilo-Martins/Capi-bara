import React, { useContext, useEffect, useState } from 'react'
import { Product } from '../interface/Product.interface';

import {ListContext} from '../context/ListContect';

export const calcularTotal = () => {
    const [totalReal, setTotalReal] = useState<number>(0);
    const [totalR, setTotalR] = useState<number>(0);
    const { products, agregarCarro, setProducts, eliminar, setProduct, setIsEdit, isEdit } = useContext(ListContext);

    useEffect(() => {
        const calculoTotal = products.reduce((total: number, precio: Product) => {
          if (precio.inCar === true) {
            return precio ? Number(precio.price) + total : total;
          }else{
            return total
          }
    
        }, 0);
    
        setTotalReal(calculoTotal);
      }, [products]);


      useEffect(() => {
        const totalRef = products.reduce((total: number, precio: Product) => {
          return precio ? Number(precio.price) + total : total;
        }, 0);
    
        setTotalR(totalRef);
      }, [products]);
    

  return (
    {
        totalReal,
        totalR
    }
  )
}
