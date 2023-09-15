import React, { ChangeEvent } from 'react'
import { ProductType } from '../interface/Product.interface'

interface Props{
    lista: string[]
    value: string | number 
    onChange:({ target: { name, value }, }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const Select = ({lista, value, onChange}: Props) => {
  return (
    <div>
    <label
      className="px-2 py-3 fw-bold text-uppercase"
      htmlFor="categoria"
    >
      Categoria
    </label>
    <select
      id="categoria"
      className="form-control"
      name="producType" // Cambiado de "categoria" a "productType" para que coincida con el estado
      onChange={onChange}
      value={value}
    >
      {lista.map((e, index) => (
        <option value={e} key={index}>
          {e}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Select