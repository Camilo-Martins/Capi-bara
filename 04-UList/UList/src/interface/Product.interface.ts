export interface Product{
    id: number
    name: string
    price: number
    inCar: boolean
    producType: string
}



export type ProductType = | "Comida fresca" | "Congelados" | "Aseo Casa" | "Aseo Personal"
| "Dulces" | "Herramientas" | "Otros" | "Sin tipo" | "Tecnología"

export const lista = [
    "Sin tipo",
    "Aseo Casa",
    "Aseo Personal",
    "Comida fresca",
    "Congelados",
    "Dulces",
    "Herramientas",
    "Otros",
    "Tecnología",
  ]