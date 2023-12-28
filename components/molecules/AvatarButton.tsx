import { Image, Pressable, StyleProp, View, ViewStyle } from "react-native";

export type PostAvatarProps = {
  //   style?: StyleProp<ViewStyle> | undefined;
  avatarUrl?: string;
};

export default function PostAvatar(props: PostAvatarProps) {
  return (
    <Pressable
      style={{
        borderRadius: 48,
        backgroundColor: "#CDD6DC",
        width: 48,
        height: 48,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(props.avatarUrl && (
          <Image
            style={{
              borderRadius: 48,
              backgroundColor: "#CDD6DC",
              width: 48,
              height: 48,
            }}
            source={{ uri: props.avatarUrl }}
          />
        )) || (
          <Image
            style={{ width: 24, height: 18 }}
            source={require("../../assets/placeholder/empty-image.svg")}
          />
        )}
      </View>
    </Pressable>
  );
}
