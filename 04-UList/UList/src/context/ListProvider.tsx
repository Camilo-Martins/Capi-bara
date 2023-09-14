import { useState } from "react";
import { Product } from "../interface/Product.interface";
import { ListContext } from "./ListContect";

export const initialState = {
    id: 999999999,
    name: "",
    price: 0 ,
    inCar: false, // El nombre del campo en el estado es "inCar"
    producType: "Sin tipo",
  };


export const ListProvider =  ({children} : any) =>{

    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>(initialState);
    const [isEdit, setIsEdit] = useState<boolean>(false)

    
    const agregar = (product: Product) =>{

        product.id = Date.now();
        product.inCar = false;

       

        if(product.price.toString().startsWith("0")){
            product.price = Number(product.price.toString().slice(1))
        }

       


            setProducts([...products, product])
          
       setProduct(initialState)

        
    }

    const agregarCarro = (id: number) =>{
        setProducts(
            products.map((produc) =>
              produc.id === id ? {...produc, inCar: !produc.inCar} : produc
            )
          )
    }

    const editar = (id: number, produc: Product) =>{
       
        setProducts(
            products.map((product) =>
            product.id === id ? {...product, name: produc.name, price: produc.price,
            producType: produc.producType, inCar: produc.inCar} : product)
        )

    
    }

    const eliminar = (id: number) =>{
        setProducts(
            products.filter(product =>
                product.id !== id
                )
        )


       
    }

    return(
        <ListContext.Provider
            value={{
               product,
               isEdit,
               setIsEdit,
               setProduct,
               setProducts,
               products,     
               agregar,
               agregarCarro ,
               editar,
               eliminar
        
            }}
        >
            {children}
        </ListContext.Provider>
    )
}