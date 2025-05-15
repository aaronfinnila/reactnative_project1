import { Text, View, Image, Button, Pressable } from "react-native";
import  Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, withSpring } from 'react-native-reanimated';
import { useState } from "react"
import "../global.css";

export default function Index() {

  const [num, setNum] = useState(0)
  const [incClick, setIncClick] = useState(1)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: num === 0 ? withSpring(0) : num % 2 === 0 && num > 0 ? withSpring(-20) : withSpring(20) }],
  })
)
  
  const buttonPressed = (): void => {
    setNum(num+1*incClick)
  }
  
  const buttonReset = (): void => {
    setNum(0)
  }

  return (
    <View className="items-center">
      <View>
        <Text className="text-5xl text-blue-500 leading-tight">sigma clicker</Text>
      </View>
      <Animated.View style={[animatedStyles, {marginLeft:0}]}>
        <Pressable onPress={buttonPressed}>
          <Image source={require('../assets/images/gutsucatsu.jpg')}/>
        </Pressable>
      </Animated.View>
      <View className="mt-12">
          <Text className="text-5xl text-blue-500">{num}</Text>
      </View>
      <View className="mt-48">
        <Button title="reset" onPress={buttonReset}/>
      </View>
    </View>
  )
}