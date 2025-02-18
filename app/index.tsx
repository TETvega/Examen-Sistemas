import FAB_Btn from "@/components/FAB_Btn"
import TemperatureCount from "@/components/TemperatureCount"
import { globalStyles } from "@/styles/global-styles"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import {  Text, View } from "react-native"


const Temperature = () => {
    const [count, setcount] = useState(20)
    const [color, setcolor] = useState("#00FF00")
    
    useEffect(()=> {
        // ! TODO CALCULAR SUB RESULTADO
        if(count < 15) {
            setcolor("#0000ff")
        }
        if(count >= 15 && count <= 25) {
            setcolor("#00FF00")
        }
        if(count > 25){
            setcolor("#ff0000")
        }
        
    },[count])
  return (
        <View style={globalStyles.container}>
          <TemperatureCount  label={count} colorText={color}/>
    
    
          <FAB_Btn label="+1"
            onPress={()=> setcount(count+1)}
            onLongPress={()=> setcount(20)}
    
          />
          <FAB_Btn label="-1"
            onPress={()=> setcount(count-1)}
            onLongPress={()=> setcount(20)}
            position="left"
          />
          <StatusBar style="auto" />
        </View>
  )
}

export default Temperature