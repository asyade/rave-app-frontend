import Bar from "../layouts/Bar";
import Button, { ButtonStyles } from "../inputs/Button";
import Section from "../layouts/Section";
import { IconBtnSearch, IconTabEvent, IconTabGems, IconTabHome, IconTabMusic, IconTabStream } from "../drawable/Icon";
import { COMMON_SIDE_MARGIN, styles } from "../theme";
import { View, Image, StyleSheet } from 'react-native'
import { useAuth0, User } from "react-native-auth0";

const componentStyles = StyleSheet.create({
    tabButton: {
        paddingTop: 16,
        height: 64,
        borderTopWidth: 4,
    },
    tabButtonActive: {
        borderColor: "#EE8D35"
    },
    tabButtonInactive: {
        borderColor: "#363636"
    }
})

export default function Footer({activeTab = "home", onTabSelected = (name) => { }}) {
    const { user } = useAuth0();

    const TabButton = ({ children, name }) => {
        return (
            <Button onClick={() => onTabSelected(name)} style={[ButtonStyles.Icon, componentStyles.tabButton, name == activeTab ? componentStyles.tabButtonActive : componentStyles.tabButtonInactive]}>{children}</Button>
        )
    }

    return (
        <Section style={{
            height: 64,
            backgroundColor: "#363636"
        }}>
            <View style={[styles.sectionView, {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 0,
                paddingBottom: 0,
            }]}>
                <TabButton name="home"><IconTabHome /></TabButton>
                <TabButton name="gems"><IconTabGems /></TabButton>
                <TabButton name="event"><IconTabEvent /></TabButton>
                <TabButton name="music"><IconTabMusic /></TabButton>
                <TabButton name="stream"><IconTabStream /></TabButton>
                {
                    user && <TabButton name="profile"><Image style={{ position: 'relative', borderWidth: 1, borderColor: '#151414', top: -4, borderRadius: 32, width: 32, height: 32 }} source={{ uri: user.picture }} /></TabButton>
                }
            </View>
        </Section>
    )
}