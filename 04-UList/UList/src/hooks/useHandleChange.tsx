import React, { ChangeEvent, useContext } from 'react'


export const useHandleChange = (item: {}, setItem: React.Dispatch<React.SetStateAction<any>> ) => {

    

    const handleChange = ({
        target: { name, value },
      }: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >) => {
        setItem({ ...item, [name]: value });
      };

  return (
    {
        handleChange
    }
  )
}

