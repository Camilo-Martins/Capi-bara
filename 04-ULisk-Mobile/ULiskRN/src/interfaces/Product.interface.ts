export interface List{
    myList: Product[]
}

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

  export const data = [
    {key: '1', value: 'Sin Tipo', disabled: false},
    {key: '2', value: 'Aseo Casa'},
    {key: '3', value: 'Aseo Personal'},
    {key: '4', value: 'Comida fresca', disabled: false},
    {key: '5', value: 'Congelados'},
    {key: '6', value: 'Dulces'},
    {key: '7', value: 'Herramientas'},
    {key: '8', value: 'Otros'},
    {key: '9', value: 'Tecnología'},
  ];