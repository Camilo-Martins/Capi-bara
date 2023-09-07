export interface Product{
    id: number
    name: string
    price: number
    inCar: boolean
    producType: string
}



export type ProductType = | "Comida fresca" | "Congelados" | "Aseo Casa" | "Aseo Personal"
| "Dulces" | "Herramientas" | "Otros" | "Sin tipo" | "Tecnología"