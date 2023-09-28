import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface Props{
    style: any
    handleOnPress : () => void
    textButton: string
    buttonStyle: any
}


const OptionButton = ({style, handleOnPress, textButton, buttonStyle} : Props) => {
  return (
    <TouchableOpacity style={style} onPress={handleOnPress}>
    <Text style={buttonStyle}>{textButton}</Text>
  </TouchableOpacity>
  )
}

export default OptionButton