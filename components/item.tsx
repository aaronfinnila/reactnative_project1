import { View, Text, ScrollView } from "react-native";
import { ItemType } from "@/app/shop";
import { Ionicons } from "@expo/vector-icons";

const Item = ({ item }: { item: ItemType }) => {

    let iconName: keyof typeof Ionicons.glyphMap = "hand-left-sharp";
    let iconSize: number = 10;
    let iconColor: string = "black";

    switch (item.name) {
        case "hand": iconName = "hand-left-sharp"; iconSize = 80; iconColor = "orange"; break;
        case "foot": iconName = "footsteps-sharp"; iconSize = 80; iconColor = "grey"; break;
        case "key": iconName = "key-sharp"; iconSize = 80; iconColor = "gold"; break;
    }

    return (
        <View>
            <Text className="mt-12 mb-8">{item.name} {item.cost} {item.incNum}</Text>
            <View className="w-24 h-24">
                <Ionicons name={iconName} size={iconSize} color={iconColor}/>
            </View>
        </View>
    )
}

export default Item