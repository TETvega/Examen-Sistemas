import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';

// Interfaces
interface Props{
    label:string;
    onPress?: ()=> void;
    onLongPress?: ()=> void;
    position?: "left" | "rigth";
}

const FAB_Btn = ({
    label,
    onPress,
    onLongPress,
    position = "rigth"
}:Props) => {
  return (
    <Pressable
    // Se le agrega la expresion lamba para poder obtener la propiedad pressed 
      style={ ({pressed})=> [

        
        globalStyles.floatingButton,
        position === "rigth" 
            ? globalStyles.postionRigth 
            : globalStyles.positionLeft,
        pressed ? {opacity: 0.8} : {opacity: 1}

      ]}
      onPress={ onPress}
      onLongPress={onLongPress}
      
    >
      <Text style={globalStyles.floatingButtonText}>{label}</Text>
    </Pressable>
  )
}


export default FAB_Btn