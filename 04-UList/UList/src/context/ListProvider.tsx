import { useState } from "react";
import { Product } from "../interface/Product.interface";
import { ListContext } from "./listContect";

const initialState = {
    id: 999999999,
    name: "",
    price: 0,
    inCar: false, // El nombre del campo en el estado es "inCar"
    producType: "Sin tipo",
  };


export const ListProvider =  ({children} : any) =>{

    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>(initialState);

    const agregar = (product: Product) =>{
        setProducts([...products, product])
    }

    const agregarCarro = (id: number, product: Product) =>{

    }

    return(
        <ListContext.Provider
            value={{
               product,
               setProduct,
               products,     
               agregar,
               agregarCarro 
            }}
        >
            {children}
        </ListContext.Provider>
    )
}