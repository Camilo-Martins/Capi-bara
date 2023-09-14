import React, { ChangeEvent } from 'react'

interface Props {
    id : string
    name: string
    label: string
    value: string | number 
    type: string
    pl: string
    htmlF: string
    onChange:({ target: { name, value }, }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const Input = ({id, name, value, label,type,pl,htmlF, onChange}: Props) => {
  return (
    <div>
          <label className="px-2 py-2 fw-bold text-uppercase" htmlFor={htmlF}>
            {label}
          </label>
          <input
            id={id}
            name={name} // Cambiado de "nombre" a "name" para que coincida con el estado
            className="form-control"
            type={type}
            placeholder={pl}
            onChange={onChange}
            value={value}
            maxLength={20}
           
          />
        </div>
  )
}

export default Input