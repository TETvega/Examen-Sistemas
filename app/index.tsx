
import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import useChangeColor from '@/hooks/useChangeColor'
import ChangeColor_Btn from '@/components/ChangeColor_Btn'



const Colors = (

) => {

    const {
        color,
        GenerateColor
    } = useChangeColor()




  return (
    <View style={StyleSheet.Create : backgroundColor : color} >
      <ChangeColor_Btn  label='Cambiar Color' onPress = {GenerateColor }/>
    </View>
  )
}

export default Colors