import Bar from "../layouts/Bar";
import Button, { ButtonStyles } from "../inputs/Button";
import Section from "../layouts/Section";
import { IconBtnSearch, IconTabEvent, IconTabGems, IconTabHome, IconTabMusic, IconTabStream } from "../drawable/Icon";
import { COMMON_SIDE_MARGIN, styles } from "../theme";
import { View } from 'react-native'

export default function Footer({activeTab="home", onTabSelected=(name)=>{}}) {

    const TabButton = ({active = false, children, name}) => {
        return (
            <Button onClick={() => onTabSelected(name)} style={[ButtonStyles.Icon, { paddingTop: 16, height: 64, borderTopWidth: 4, borderColor: activeTab == name ? "#EE8D35" : "#151414"}]}>{children}</Button>
        )
    }
    
    return (
        <Section style={{
            height: 64,
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
            </View>
        </Section>
    )
}