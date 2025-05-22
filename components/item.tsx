import { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, Pressable, Alert } from "react-native";
import { ItemType } from "@/app/shop";
import { Ionicons } from "@expo/vector-icons";
import { useCounter } from "./CounterContext";
import { Audio } from "expo-av";
import Animated, { useAnimatedStyle, withRepeat, withSpring, useSharedValue } from "react-native-reanimated";

type ItemProps = {
    item: ItemType;
    itemClass: string;
}

const Item = ({ item, itemClass }: ItemProps) => {

    const {num, setNum} = useCounter();
    const {incAct, setIncAct} = useCounter();
    const {incPas, setIncPas} = useCounter();
    const [costInc, setCostInc] = useState(1);
    const offset = useSharedValue(0);
    let realcost = item.cost*costInc;

    const handlePress = () => {
        if (realcost <= num) {
            if (itemClass === "active") {
                setIncAct(incAct + item.incNum);
            }
            if (itemClass === "passive") {
                setIncPas(incPas + item.incNum);
            }
            setNum(num-realcost);
            pressAnimation();
            playSound();
            setCostInc(costInc + 0.15);
        } else {
            Alert.alert("You don't have enough money!");
        }
    }

    const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
    require('./assets/sound.mp3') // change sound file
    );
    await sound.playAsync();
    }

    const pressAnimation = () => {
        offset.value = 0;
        offset.value = withRepeat(withSpring(20), 1, true);
    }

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
      }))

    let iconName: keyof typeof Ionicons.glyphMap = "hand-left-sharp";
    let iconSize: number = 10;
    let iconColor: string = "black";

    switch (item.name) {
        case "hand": iconName = "hand-left-sharp"; iconSize = 80; iconColor = "orange"; break;
        case "foot": iconName = "footsteps-sharp"; iconSize = 80; iconColor = "grey"; break;
        case "key": iconName = "key-sharp"; iconSize = 80; iconColor = "gold"; break;
        case "hammer": iconName = "hammer-sharp"; iconSize = 80; iconColor = "blue"; break;
        case "clock": iconName = "time-sharp"; iconSize = 80; iconColor = "black"; break;
        case "balloon": iconName = "balloon-sharp"; iconSize = 80; iconColor = "red"; break;
        case "calendar": iconName = "calendar-number-sharp"; iconSize = 80; iconColor = "green"; break;
        case "car": iconName = "car-sharp"; iconSize = 80; iconColor = "purple"; break;
    }

    return (
        <View>
            <Text className="mt-12 mb-8 text-4xl">{item.name}</Text>
            <Text className="text-gray-500 border-gray-300 font-bold">cost: {realcost} increase: {item.incNum}</Text>
            <View className="w-24 h-24">
                <Ionicons name={iconName} size={iconSize} color={iconColor}/>
            </View>
            <Animated.View style={animatedStyles}>
                <Pressable onPress={handlePress} style={() => [
                    {
                    backgroundColor: "white"
                    },
                ]}>
                    <Text> buy item </Text>
                </Pressable>
            </Animated.View>
        </View>
    )
}

export default Item