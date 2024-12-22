import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";

import { meditations } from "@/data";

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((m) => m.id === Number(id));

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!meditation) return;

    async function loadAudio() {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/meditations/audio1.mp3"),
        { shouldPlay: false }
      );
      setSound(sound);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis ?? 0);
        }
      });
    }

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [meditation]);

  const togglePlayback = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return (
    <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
      {/* Top Section */}
      <View className="flex-row items-center justify-between px-6 py-10">
        <AntDesign name="infocirlceo" size={24} color="black" />
        <View className="bg-zinc-800 p-2 rounded-md">
          <Text className="text-zinc-100 font-semibold">Today's Meditation</Text>
        </View>
        <AntDesign onPress={() => router.back()} name="close" size={26} color="black" />
      </View>

      <Text className="text-3xl mt-20 mb-60 text-center text-zinc-800 font-semibold">
        {meditation.title}
      </Text>

      {/* Play/Pause Button */}
      <Pressable
        onPress={togglePlayback}
        className="bg-zinc-800 w-20 aspect-square self-center rounded-full items-center justify-center p-6"
      >
        <FontAwesome6 name={isPlaying ? "pause" : "play"} size={24} color="snow" />
      </Pressable>

      {/* Bottom Section */}
      <View className="p-5 mt-auto gap-5">
        <View className="flex-row justify-between">
          <MaterialIcons name="airplay" size={24} color="#3A3937" />
          <MaterialCommunityIcons name="cog-outline" size={24} color="#3A3937" />
        </View>

        {/* Playback Slider */}
        <Slider
          style={{ width: "100%", height: 40 }}
          value={position}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={async (value) => {
            if (sound) {
              await sound.setPositionAsync(value);
            }
          }}
          minimumTrackTintColor="#3A3937"
          maximumTrackTintColor="#3A393755"
          thumbTintColor="#3A3937"
        />

        <View className="flex-row justify-between">
          <Text>{new Date(position).toISOString().substr(14, 5)}</Text>
          <Text>{new Date(duration).toISOString().substr(14, 5)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
