import { Text } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign';
import { meditations } from "@/data"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MeditationDetails(){
    const { id } = useLocalSearchParams<{ id: string }>()

    const {top} = useSafeAreaInsets()

    const meditation = meditations.find((m)=> m.id === Number(id))

    if(!meditation){
        return <Text>Meditation not found</Text>
    }
    return (
        <SafeAreaView>
            <Text className="text-3xl ">{meditation?.title}</Text>
            <AntDesign onPress={()=> router.back()} className="absolute top-1 left-[39vh]"
            style={{top: top + 10}}
            name="close"
            size={24}
            color="black" />
        </SafeAreaView>
    )
}