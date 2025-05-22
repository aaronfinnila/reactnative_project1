import { Text, View, Image, Button, Pressable } from "react-native";
import  Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing, withSpring } from 'react-native-reanimated';
import { useState, useEffect } from "react";
import { useCounter } from "../components/CounterContext";
import "../global.css";
import { Audio } from "expo-av";

export default function Index() {

  const {num, setNum} = useCounter();
  const {incAct, setIncAct} = useCounter();
  const {incPas, setIncPas} = useCounter();

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(prevCount => prevCount + incPas);
    }, 1000);

    return () => clearInterval(interval);
  }, [incPas]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: num === 0 ? withSpring(0) : num % 2 === 0 && num > 0 ? withSpring(-20) : withSpring(20) }],
  })
)
  
  const buttonPressed = (): void => {
    setNum(num+1*incAct);
    const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
    require('./assets/sound.mp3')// change sound file
    );
    await sound.playAsync();
    }
  }
  
  const buttonReset = (): void => {
    setNum(0);
  }

  return (
    <View className="items-center">
      <View>
        <Text className="text-5xl text-blue-500 leading-tight">Σ clicker</Text>
      </View>
      <Animated.View style={[animatedStyles, {marginLeft:0}]}>
        <Pressable onPress={buttonPressed}>
          <Image source={require('../assets/images/gutsucatsu.jpg')}/>
        </Pressable>
      </Animated.View>
      <View className="mt-12">
          <Text className="text-5xl text-blue-500">{num}</Text>
      </View>
      <View className="mt-24">
        <Text className="text-blue-500">Σ per second: {incPas}</Text>
        <Text className="text-blue-500">Σ per click: {incAct}</Text>
      </View>
      <View className="mt-48">
        <Button title="reset" onPress={buttonReset}/>
      </View>
    </View>
  )
}