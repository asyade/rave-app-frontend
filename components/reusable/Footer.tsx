import Bar from "../layouts/Bar";
import Button, { ButtonStyles } from "../inputs/Button";
import Section from "../layouts/Section";
import { IconBtnSearch, IconTabEvent, IconTabGems, IconTabHome, IconTabMusic, IconTabStream } from "../drawable/Icon";
import { COMMON_SIDE_MARGIN, PRIMARY_COLOR, styles } from "../theme";
import { View, Image, StyleSheet } from 'react-native'
import { useAuth0, User } from "react-native-auth0";

export default function Footer({ activeTab = "home", onTabSelected = (name) => { } }) {
    const { user } = useAuth0();

    const TabButton = ({ children, name }) => {
        return (
                <Button onClick={() => onTabSelected(name)} style={[ButtonStyles.Icon]}>
                    <>
                        {children}
                        { (name == activeTab) && <View style={{width: 48, top: -10, position: 'absolute', borderTopColor: PRIMARY_COLOR, borderTopWidth: 4}}></View> }
                    </>
                </Button>
        )
    }

    return (
        <Section style={{
            height: 64,
        }}>
            <View style={[styles.sectionView, {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: "#363636"
            }]}>
                <TabButton name="home"><IconTabHome /></TabButton>
                <TabButton name="gems"><IconTabGems /></TabButton>
                <TabButton name="event"><IconTabEvent /></TabButton>
                <TabButton name="music"><IconTabMusic /></TabButton>
                <TabButton name="stream"><IconTabStream /></TabButton>
                {
                    user && <TabButton name="profile"><Image style={{ position: 'relative', borderWidth: 1, borderColor: 'white', top: 0, borderRadius: 30, width: 24, height: 24 }} source={{ uri: user.picture }} /></TabButton>
                }
            </View>
        </Section>
    )
}