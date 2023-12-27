import { Image, Pressable, View } from "react-native";

export default function PostAvatar() {
    return (
        <Pressable style={{
            borderRadius: 48,
            backgroundColor: "#CDD6DC",
            width: 48,
            height: 48,
        }}>
            <View style={{
                width: 48,
                height: 48,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style={{ width: 24, height: 18 }} source={require("../../assets/placeholder/empty-image.svg")} />
            </View>
        </Pressable>
    )
}