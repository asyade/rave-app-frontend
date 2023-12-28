import React, { useState } from "react";
import { View, Image } from "react-native";

import Container from "../templates/Container";
import Footer from "../cells/Footer";
import Content from "../templates/ContentList";
import { Credentials } from "react-native-auth0";
import MainTabProfile, { MainTabProfileBar } from "./MainTabProfile";
import MainTabHome from "./MainTabHome";
import MainBar from "./MainBar";
import { useAppContext } from "../../AppContext";
import Button, { ButtonStyles } from "../molecules/Button";
import { IconBtnBack } from "../atomes/Icon";
import HeaderLayout from "../templates/HeaderLayout";

const tabs = {
  home: () => {
    return { content: <MainTabHome />, bar: <MainBar /> };
  },
  gems: () => {
    return { content: <Content data={null} error={null} />, bar: <MainBar /> };
  },
  music: () => {
    return { content: <Content data={null} error={null} />, bar: <MainBar /> };
  },
  event: () => {
    return { content: <Content data={null} error={null} />, bar: <MainBar /> };
  },
  stream: () => {
    return { content: <Content data={null} error={null} />, bar: <MainBar /> };
  },
  profile: () => {
    return { content: <MainTabProfile />, bar: <MainTabProfileBar /> };
  },
};

type MainProps = {
  credentials: Credentials;
};

export default function Main({ credentials }: MainProps) {
  const [currentTab, setCurrentTab] = useState("home");

  const { currentPopup, removeStackedView } = useAppContext();

  const { content, bar } = tabs[currentTab]();

  const onBack = () => {
    removeStackedView(currentPopup.id);
  };

  return (
    <>
      <Container style={{ height: "100vh" }}>
        <HeaderLayout
          logoComponent={
            <Image
              style={{
                width: 42,
                height: 42,
              }}
              source={require("../../assets/logo.png")}
            />
          }
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ flex: 1 }}>{bar}</View>
          </View>
        </HeaderLayout>
        <View style={{ flex: 1 }}>{content}</View>
        <Footer
          activeTab={currentTab}
          onTabSelected={(name) => setCurrentTab(name)}
        />
      </Container>
      {currentPopup && (
        <Container>
          <HeaderLayout
            logoComponent={
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <View>
                  <Button onClick={onBack} style={[ButtonStyles.Icon]}>
                    <IconBtnBack />
                  </Button>
                </View>
              </View>
            }
          >
            {currentPopup.action && <View>{currentPopup.action}</View>}
          </HeaderLayout>
        </Container>
      )}
    </>
  );
}
