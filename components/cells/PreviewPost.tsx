import { View, Text, Image } from "react-native";
import PostAvatar from "../molecules/AvatarButton";
import Section from "../templates/Section";
import { COMMON_SIDE_MARGIN, styles } from "../theme";

export default function PreviewPost({ title = "User name" }) {
    return (
        <Section>
            <View style={[
                styles.sectionView, {
                    alignItems: "flex-start",
                }]}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    columnGap: COMMON_SIDE_MARGIN,
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <PostAvatar />
                    <Text style={styles.textTitle}>
                        {title}
                    </Text>
                </View>
                <View>
                    <Text style={{color: 'white'}}>
                        Lorem ipsum dolor sit am, consectetur adipisg elit, sed consectetur ipsum dolor consequat…
                    </Text>
                </View>
            </View>
        </Section>
    )
}