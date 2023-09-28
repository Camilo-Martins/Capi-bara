import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Dispatch } from 'react'
import { currenT } from '../../App';

interface Props{
    time: number;
    currentTime: any;
    setCurrentTime: React.Dispatch<React.SetStateAction<any>>
    setTime: React.Dispatch<React.SetStateAction<number>>
}

const Header = ({time, currentTime, setCurrentTime, setTime}: Props) => {

    const options = ["POMO" , "SHORT" , "BREAK"]

    const handlePress = (index: 
        number) =>{
      
      const conversionType =  Number(index.valueOf())

       const newTime = conversionType  === 0 ? 25: conversionType === 1 ? 5: 15;
       setCurrentTime(index)
        setTime(newTime * 60)
        console.log()
    }

  return (
    <View style={{flexDirection: "row"}}>
     {options.map((item, index) =>(
      <TouchableOpacity
     
      style={[styles.itemStyle
       , currentTime !== index && {borderColor: "transparent"}
    ]} key={index}
        onPress={() => handlePress(index)}
      >
          <Text style={{fontWeight: 'bold'}} >
            {item}
        </Text>
      </TouchableOpacity>
     ))}
    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle: {
        borderWidth: 3,
        padding: 5,
        width: "33%",
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20
    }
})

export default Header