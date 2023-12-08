import Content from "../layouts/Content";
import { IconBtnAdd, IconBtnAlert, IconBtnChat, IconBtnSearch } from '../drawable/Icon';
import Button, { ButtonStyles } from '../inputs/Button';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { logger } from "react-native-logs";
import Bar from '../layouts/Bar';
import { View, Text } from "react-native";

export function MainTabProfileBar() {
    const { user } = useAuth0()
    return (
        <>
            <View style={{ overflow: 'hidden'}}>
                <Text style={{color: "white", fontSize: 16}}>{user.name}</Text>
            </View>
        </>
    )
}

export default function MainTabProfile() {
    return <Content data={[
    ]} />
}
