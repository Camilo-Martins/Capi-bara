import { useEffect, useState } from 'react'
import { View, Text, StatusBar,Platform, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from './src/components/Header'
import Timer from './src/components/Timer'

const color = ["red", "blue", "green"]
export type currenT = "POMO" | "SHORT" | "BREAK"

const App = () => {

  const [time, setTime] = useState<number>(25 * 60)
  const [isWorkin, setIsWorking] = useState<boolean>(false)
  const [currenTime, setCurrenTime] = useState<any>("POMO"  )
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() =>{
    let interval: any = null;
    if(isActive){
      interval = setInterval(() =>{
        setTime(time - 1)
      }, 1000)
    }else{
      clearInterval(interval)
    }

    if(time === 0){
      setIsActive(false)
      setIsWorking((prev) => !prev)
      setTime(isWorkin ? 300: 1500)
    }

    return () => clearInterval(interval)

  },[isActive, time])

   const handleStartStone = () =>{
    setIsActive(!isActive)

   } 

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color[currenTime.valueOf()]}]}>
      <View style={{paddingTop: 30, paddingHorizontal: 15, flex: 1 }}>
        <Text> Pomodoro</Text>
        <Header
          time={time}
          currentTime={currenTime}
          setCurrentTime={setCurrenTime}
          setTime={setTime}
        />
        <Timer
          time={time}
        />
        <TouchableOpacity
          onPress={() => handleStartStone() }
        >
       
          <Text> {
          isActive ? "Resetear" : "Iniciar"} </Text>
         
        
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App