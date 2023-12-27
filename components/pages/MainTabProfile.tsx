import Content from "../templates/ContentList";
import { IconBtnAdd, IconBtnAlert, IconBtnChat, IconBtnSearch } from '../molecules/Icon';
import Button, { ButtonStyles } from '../atomes/Button';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { logger } from "react-native-logs";
import Bar from '../templates/Bar';
import { View, Text } from "react-native";

export function MainTabProfileBar() {
    const { user } = useAuth0()
    return (
        <>
            <View style={{ overflow: 'hidden' }}>
                <Text style={{ color: "white", fontSize: 16 }}>{user.name}</Text>
            </View>
        </>
    )
}

export default function MainTabProfile() {
    const { user, clearCredentials } = useAuth0()
    return (
        <View style={{ flex: 1 }}>
            <Button style={[ButtonStyles.Primary]} onClick={() => {clearCredentials()}}><Text>Logout</Text></Button>
        </View>
    )
}
