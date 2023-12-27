import { View, Pressable, Image, Text } from "react-native";
import Section from "../templates/Section";
import { COMMON_SIDE_MARGIN, styles } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth0 } from "react-native-auth0";
import { relative } from "path";

function StoryButton({ overlay = null, border = false, imageStyle, title, image, onClick = () => { } }) {
    return (<Pressable
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 8,
            justifyContent: 'space-between',
            // borderWidth: 4,
            // borderColor: "red",
        }}
        onPress={onClick}
    >
        <View style={{
            height: 80,
            width: 80,
        }}>
            {border && <View style={{
                left: -6,
                top: -6,
                width: 92,
                height: 92,
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: 100
            }}>
                <LinearGradient
                    // Background Linear Gradient
                    end={{ x: 0.3, y: 0.8 }}
                    colors={['#CDD6DC', '#EC6F02']}
                    style={{ width: 92, height: 92, borderRadius: 100 }}
                />
            </View>}
            <View style={{
                borderColor: 'black',
                borderWidth: border ? 2 : 0,
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: "#CDD6DC",
                borderRadius: 80,
                position: 'relative'
            }}>
                {overlay && <Image
                    style={{
                        top: 0,
                        borderRadius: 92,
                        width: 76, height: 76,
                        position: overlay ? 'absolute' : 'relative',
                    }}
                    source={{ uri: overlay }}
                />}
                <Image style={imageStyle} source={image} />
            </View>
        </View>
        <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>)
}

export default function StoryList({ style = {} }) {
    const { user } = useAuth0();

    const stories = [
        {
            id: "1",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },
        {
            id: "2",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },
        {
            id: "3",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },

        {
            id: "4",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },
        {
            id: "5",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },
        {
            id: "6",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        },
        {
            id: "7",
            title: "Post name",
            image: require('../../assets/placeholder/empty-image.png')
        }
    ];
    return (
        <Section>
            <View style={[
                styles.sectionView,
                {
                    height: 128,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    overflow: 'hidden' // TODO: instagram like behaviour
                }, style]}>
                <StoryButton border={true} imageStyle={{ width: 24, height: 24 }} title={"Your story"} overlay={user.picture} image={require('../../assets/icons/btn-add-accent.png')} />
                {
                    stories.map(e => (
                        <StoryButton imageStyle={{ width: 24, height: 18 }} key={e.id} title={e.title} image={e.image} />
                    ))
                }
            </View >
        </Section>
    )
}