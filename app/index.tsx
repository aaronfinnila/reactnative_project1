import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react"
import "../global.css";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function Index() {

  const [num, setNum] = useState(0)

  const buttonPressed = (): void => {
    pressAnimation()
    setNum(num+1)
  }

  const buttonReset = (): void => {
    setNum(0)
  }
  
  const pressAnimation = (): void => {
    
  }

  return (
    <View className="items-center">
      <View>
        <Text className="text-5xl text-blue-500 leading-tight">sigma clicker</Text>
      </View>
      <View className="mt-32">
        <Pressable onPress={buttonPressed}>
          <Image source={require('../assets/images/gutsucatsu.jpg')}></Image>
        </Pressable>
      </View>
      <View className="mt-12">
          <Text className="text-5xl text-blue-500">{num}</Text>
      </View>
      <View className="mt-48">
        <Button title="reset" onPress={buttonReset}/>
      </View>
    </View>
  );
}