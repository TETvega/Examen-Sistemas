import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  label: string;
  onPress: () => void,
}

const ChangeColor_Btn = ({ label , onPress }: Props) => {
  return (
    <Pressable
      onPress={()=>  onPress() }
    >
      <Text>{label}</Text>
    </Pressable>
  );
};

export default ChangeColor_Btn;
