import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useFonts } from 'expo-font'
import { globalStyles } from '@/styles/global-styles'


const _layout = () => {

  // const []= useFonts({
  //   MPLUSRounded1cThin: require('../assets/fonts/MPLUSRounded1c-Thin.ttf')
  // })

  return (
    <View style={ globalStyles.background}>
      <Slot />

      <StatusBar style='light' />
    </View>
  )
}

export default _layout
