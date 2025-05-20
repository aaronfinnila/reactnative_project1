import { Text, ScrollView, View } from "react-native";
import "../global.css";
import "../components/item"
import Item from "../components/item";

export type ItemType = {
  name: string;
  incNum: number;
  cost: number;
}

export default function Shop() {

  const activeItems: ItemType[] = [
    {
      name: "hand",
      incNum: 1,
      cost: 50,
    },
    {
      name: "foot",
      incNum: 2,
      cost: 200,
    },
    {
      name: "key",
      incNum: 4,
      cost: 750,
    },
  ]

  const passiveItems: ItemType[] = [
    {
      name: "hammer",
      incNum: 1,
      cost: 50,
    },
    {
      name: "foot",
      incNum: 2,
      cost: 200,
    },
    {
      name: "key",
      incNum: 4,
      cost: 750,
    },
  ]
  
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="items-center">
          <Text className="text-7xl text-blue-500">shop</Text>
          <Text className="text-4xl text-blue-500 mt-12 mb-8">active items</Text>
            {activeItems.map(item1 => <Item item={item1} key={item1.name} itemClass="active"/>)}
          <Text className="text-4xl text-blue-500 mt-12 mb-8">passive items</Text>
            {passiveItems.map(item1 => <Item item={item1} key={item1.name} itemClass="passive"/>)}
        </View>
    </ScrollView>
  )
}