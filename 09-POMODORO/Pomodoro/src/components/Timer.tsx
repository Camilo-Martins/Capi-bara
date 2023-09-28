import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    time: number
}

const Timer = ({time}: Props) => {


    const formatedTime = `${Math.floor(time / 60).toString().padStart(2, "0")}: ${(time % 60).toString().padStart(2, "0")}`

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatedTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex: 0.3,   
    justifyContent: 'center', 
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15
},
time:{
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "black"
}

})

export default Timer