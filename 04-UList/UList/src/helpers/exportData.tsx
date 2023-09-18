import React, { useContext } from 'react'
import { ListContext } from '../context/ListContect';

export const exportData = () => {

    const {products } =  useContext(ListContext)

    const exportList = () => {

        
    
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
          JSON.stringify(products)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "lista.json";
    
        link.click();
    
           
    
      };

  return (
   {
    exportList
   }
  )
}

