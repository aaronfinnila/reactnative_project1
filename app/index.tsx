import { Text, View, Image, Button, Pressable } from "react-native";
import  Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, } from 'react-native-reanimated';
import { useState } from "react"
import "../global.css";

export default function Index() {

  const sv = useSharedValue(10);
  const [num, setNum] = useState(0)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1)
  }

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(sv.value, config),
    }
  })

  const buttonPressed = (): void => {
    pressAnimation()
    setNum(num+1)
  }

  const buttonReset = (): void => {
    setNum(0)
    sv.value = 10
  }
  
  const pressAnimation = (): void => {
    sv.value = Math.random() * 350
  }

  return (
    <View className="items-center">
      <View>
        <Text className="text-5xl text-blue-500 leading-tight">sigma clicker</Text>
      </View>
      <View className="mt-32">
        <Pressable onPress={buttonPressed} style={({ pressed }) => [
          { opacity: pressed ? 0.7 : 1},
          { transform: [{ scale: pressed ? 0.95 : 1 }] },
        ]}>
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
  )
}