
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({

    // Estilos ara el Background
    background: {
        backgroundColor: Colors.background,
        flex: 1,
      },
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    
      textCount: {
        fontSize: 120,
        fontWeight: "100",
        
      },
      
    floatingButton: {
        position: "absolute",
        bottom: 200,
        backgroundColor: '#EAD8B1',
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0 , height:5},
        shadowOpacity: 0.3,
        elevation:3,
      },
      floatingButtonText: {
        color: '#001F3F',
        fontSize: 20,
        fontWeight: 'bold',
        width: 35,
        height: 25,
    
      },
      positionLeft:{
        left:40
      },
      postionRigth:{
        right:40
      }
});