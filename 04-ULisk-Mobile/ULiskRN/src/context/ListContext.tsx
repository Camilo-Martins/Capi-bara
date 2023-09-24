import {createContext, useState} from 'react'
import { Product } from '../interfaces/Product.interface'


type ListContextProps ={
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    isEdit: boolean
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
    isModal: boolean
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>

    agregar: (product: Product) => void;
    agregarCarro: (id: number) => void;
    editar: (id: number, product: Product) => void;
    eliminar: (id: number) => void;
}

export const ListContextProps = createContext({} as ListContextProps)
