import { Text, View, Image, Pressable } from "react-native";
import Section from "../layouts/Section";
import { COMMON_SIDE_MARGIN, styles } from "../theme";
import PostAvatar from "../drawable/PostAvatar";

export default function CreatePost() {
    return (
        <Section>
            <View style={[
                { flexDirection: 'row' },
                styles.sectionView
            ]}>
                <PostAvatar/>
                <Pressable style={{
                    height: 48,
                    borderRadius: 48,
                    flexGrow: 1,
                    flex: 1,
                    paddingLeft: COMMON_SIDE_MARGIN,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    backgroundColor: "#282A2A"
                }}>
                    <Text style={{ color: '#707070' }}>Create a post</Text>
                </Pressable>
            </View>
        </Section>
    )
}