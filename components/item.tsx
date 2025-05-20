import { View, Text, ScrollView, Button } from "react-native";
import { ItemType } from "@/app/shop";
import { Ionicons } from "@expo/vector-icons";
import { useCounter } from "./CounterContext";

type ItemProps = {
    item: ItemType;
    itemClass: string;
}

const Item = ({ item, itemClass }: ItemProps) => {

    const {num, setNum} = useCounter();
    const {incAct, setIncAct} = useCounter();
    const {incPas, setIncPas} = useCounter();

    const handlePress = () => {
        if (itemClass === "active") {
            setIncAct(incAct + item.incNum);
        }
        if (itemClass === "passive") {
            setIncPas(incPas + item.incNum);
        }
    }

    let iconName: keyof typeof Ionicons.glyphMap = "hand-left-sharp";
    let iconSize: number = 10;
    let iconColor: string = "black";

    switch (item.name) {
        case "hand": iconName = "hand-left-sharp"; iconSize = 80; iconColor = "orange"; break;
        case "foot": iconName = "footsteps-sharp"; iconSize = 80; iconColor = "grey"; break;
        case "key": iconName = "key-sharp"; iconSize = 80; iconColor = "gold"; break;
        case "hammer": iconName = "hammer-sharp"; iconSize = 80; iconColor = "blue"; break;
    }

    return (
        <View>
            <Text className="mt-12 mb-8">{item.name} {item.cost} {item.incNum}</Text>
            <View className="w-24 h-24">
                <Ionicons name={iconName} size={iconSize} color={iconColor}/>
            </View>
            <Button onPress={handlePress} title="" color="black"/>
        </View>
    )
}

export default Item