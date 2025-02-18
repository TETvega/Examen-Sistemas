
import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';

interface Props {
    label: number;
    colorText: string;
}




const TemperatureCount =({
    label,
    colorText = Colors.green,
    // {...globalStyles.Button, backgroundColor: backgroundColor}
} : Props)=> {
  return (
    <View>
      <Text  style={{...globalStyles.textCount, color: colorText }} >{label}</Text>
    </View>
  )
}

export default TemperatureCount