import React, { useCallback, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    useWindowDimensions,
    Image,
    StatusBar,
} from 'react-native';

import { IconBtnAdd, IconBtnAlert, IconBtnChat, IconBtnSearch } from '../drawable/Icon';
import Button, { ButtonStyles } from '../inputs/Button';
import Container from '../layouts/Container';
import Header from '../reusable/Header';
import StoryList from '../reusable/StoryList';
import CreatePost from '../reusable/CreatePost';
import PreviewPost from '../reusable/PreviewPost';
import Footer from '../reusable/Footer';
import Content from '../layouts/Content';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { logger } from "react-native-logs";
import MainTabProfile, { MainTabProfileBar } from './MainTabProfile';
import Bar from '../layouts/Bar';


function HomeTab() {
    const header = <View style={{ paddingBottom: 4 }}><StoryList></StoryList></View>;
    return <Content ListHeaderComponent={header} data={[
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
        { id: "8" },
        { id: "9" },
    ]} />
}

function GemsTab() {
    return <Content data={[
    ]} />
}

function EventTab() {
    return <Content data={[
    ]} />
}

function MusicTab() {
    return <Content data={[
    ]} />
}

function StreamTab() {
    return <Content data={[
    ]} />
}

function DefaultBar() {
    return (
        <View style={{}}>
            <Bar style={{ columnGap: 32 }}>
                <Button style={[ButtonStyles.Icon]}><IconBtnAdd /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnSearch /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnAlert /></Button>
                <Button style={[ButtonStyles.Icon]}><IconBtnChat /></Button>
            </Bar>
        </View>
    )
}

export default function Main() {
    const { height, width } = useWindowDimensions()
    const [currentTab, setCurrentTab] = useState("home");
    const { clearSession, user, error, isLoading } = useAuth0();

    console.log(user)
    let rootComponent = null;
    let bar = null;
    switch (currentTab) {
        case "home":
            rootComponent = (<HomeTab />)
            bar = (<DefaultBar />)
            break;
        case "gems":
            rootComponent = (<GemsTab />)
            bar = (<DefaultBar />)
        case "music":
            rootComponent = (<MusicTab />)
            bar = (<DefaultBar />)
        case "event":
            rootComponent = (<EventTab />)
            bar = (<DefaultBar />)
        case "stream":
            rootComponent = (<StreamTab />)
            bar = (<DefaultBar />)
            break;
        case "profile":
            rootComponent = (<MainTabProfile />)
            bar = (<MainTabProfileBar />)
            break;
        default:
            rootComponent = <Text>...</Text>
            bar = (<DefaultBar />)
    }

    return (
        <Container>
            <StatusBar
                backgroundColor={'#151414'}
                barStyle={'light-content'}
                animated={true}
                hidden={false}
            />
            <Header>{bar}</Header>
            {rootComponent}
            {!isLoading && <Footer activeTab={currentTab} onTabSelected={(name) => setCurrentTab(name)} />}
        </Container>
    );
}