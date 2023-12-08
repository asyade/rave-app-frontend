import React, { useEffect, useState } from 'react';
import {
  View,
  useWindowDimensions,
  Image,
} from 'react-native';

import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { logger } from "react-native-logs";
import Main from './views/main';

var log = logger.createLogger();

function Root() {
  const { height, width } = useWindowDimensions()
  const [currentTab, setCurrentTab] = useState("home");
  const { authorize, user, error, getCredentials, isLoading } = useAuth0();
  const loggedIn = user !== undefined && user !== null;
  const [authenticating, setAuthenticating] = useState(false);

  const onLogin = async () => {
    log.info("Onlogin");
    try {
      await authorize();
      let credentials = await getCredentials();
      console.log(credentials);
    } catch (e) {
      console.error(e);
    }
    setAuthenticating(false)
}

  useEffect(() => {
    if (!loggedIn && !isLoading && !authenticating) {
      setAuthenticating(true);
      log.info("Condtion meet");
      onLogin();
    } else {
      log.info("Condtion not meet");
    }
  }, [user, isLoading, authenticating])

  if (isLoading) {
    return (
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#151414',
      }}>
        <Image
          style={{
            width: 96,
            height: 96,
          }}
          source={require("./assets/logo.png")}
        />
      </View>
    );
  } else {
    return (
      <Main/>
    );
  }
}

export default function App() {
  return (
    <Auth0Provider domain={"dev-pucpqiqy6v8crnkr.us.auth0.com"} clientId={"FkPCr5W89Zn4eJpacrVBFQbZ9QrIEFDn"}>
      <Root />
    </Auth0Provider>
  );
}
