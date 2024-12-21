import { Text, View, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { meditations } from "@/data";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }
  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      {/* Page content */}
      <View className="flex-1">
        {/* Top part of the screen */}
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 py-10">
            <AntDesign name="infocirlceo" size={24} color="black" />

            <View className="bg-zinc-800 p-2 rounded-md">
              <Text className="text-zinc-100 font-semibold">
                Today's meditation
              </Text>
            </View>

            <AntDesign
              onPress={() => router.back()}
              name="close"
              size={26}
              color="black"
            />
          </View>

          <Text className="text-3xl mt-20 text-center text-zinc-800 font-semibold">
            {meditation?.title}
          </Text>
        </View>

        {/* Play/Pause Button */}
        <Pressable className="bg-zinc-800 w-20 aspect-square self-center rounded-full items-center justify-center p-6">
          <FontAwesome6 name="play" size={24} color="snow" />
        </Pressable>

        {/* Bottom part of the screen */}
        <View className="flex-1">
          {/* Footer */}
          <View className="p-5 mt-auto gap-5">
            <View className="flex-row justify-between">
              <MaterialIcons name="airplay" size={24} color="bl#3A3937ack" />
              <MaterialCommunityIcons
                name="cog-outline"
                size={24}
                color="#3A3937"
              />
            </View>
            {/* Playback indicator */}
            <View>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#3A3937"
                maximumTrackTintColor="#3A393755"
                thumbTintColor="#3A3937"
              />
            </View>
            <View className="flex-row pr-1 justify-between">
              <Text>03:24</Text>
              <Text>13:14</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
