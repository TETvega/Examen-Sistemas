
import { View, Text } from 'react-native'
import React from 'react'
import useChangeColor from '@/hooks/useChangeColor'
import ChangeColor_Btn from '@/components/ChangeColor_Btn'

import { StyleSheet } from "react-native";

const Colors = (

) => {

    const {
        color,
        GenerateColor
    } = useChangeColor()




  return (
    <View style= {[ styles.container, {backgroundColor: color }]} >
      <ChangeColor_Btn   label='Cambiar Color' onPress = {GenerateColor }/>
    </View>
  )
}

export default Colors


const styles = StyleSheet.create({

    label:{
        color: 'white'
    },
    container: {
    
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
    },
  });