import React, { useState } from 'react';
import {
    StatusBar, View,
} from 'react-native';

import Container from '../layouts/Container';
import Header from '../reusable/Header';
import Footer from '../reusable/Footer';
import Content from '../layouts/Content';
import { Credentials } from 'react-native-auth0';
import MainTabProfile, { MainTabProfileBar } from './MainTabProfile';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import MainTabHome from './MainTabHome';
import MainBar from './MainBar';

const tabs = {
    "home": () => { return { content: (<MainTabHome />), bar: (<MainBar />) } },
    "gems": () => { return { content: (<Content data={[]} />), bar: (<MainBar />) } },
    "music": () => { return { content: (<Content data={[]} />), bar: (<MainBar />) } },
    "event": () => { return { content: (<Content data={[]} />), bar: (<MainBar />) } },
    "stream": () => { return { content: (<Content data={[]} />), bar: (<MainBar />) } },
    "profile": () => { return { content: (<MainTabProfile />), bar: (<MainTabProfileBar />) } },
};

type MainProps = {
    credentials: Credentials
}

export default function Main({ credentials }: MainProps) {
    const [currentTab, setCurrentTab] = useState("home");

    const client = new ApolloClient({
        headers: { authorization: `Bearer ${credentials.idToken}` },
        uri: process.env.EXPO_PUBLIC_API_URL,
        cache: new InMemoryCache()
    });

    const { content, bar } = tabs[currentTab]();

    return (
        <ApolloProvider client={client}>
            <Container style={{ height: "100vh" }}>
                <Header>{bar}</Header>
                <View style={{flex: 1}}>
                    {content}
                </View>
                <Footer activeTab={currentTab} onTabSelected={(name) => setCurrentTab(name)} />
            </Container>
        </ApolloProvider>
    );
}