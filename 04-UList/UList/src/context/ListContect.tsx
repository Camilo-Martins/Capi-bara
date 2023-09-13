import {createContext, useState} from 'react'
import { Product } from '../interface/Product.interface'


type ListContextProps = {
    product : Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    products : Product[];
    agregar: (product: Product) => void;
    agregarCarro: (id: number) => void;
    editar: (id: number, produc: Product) => void;
    eliminar: (id: number) => void;
}

export const ListContext = createContext({} as ListContextProps)

