import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import { useAuth0, Auth0Provider, Credentials } from 'react-native-auth0';
import { logger } from "react-native-logs";
import { styles } from './components/theme';
import Main from './components/pages/Main';

export const log = logger.createLogger();

export function MainView() {
  const { authorize, user, getCredentials, isLoading } = useAuth0();
  const [authenticating, setAuthenticating] = useState(false);
  const [credentials, setCredentials] = useState(undefined as Credentials | undefined);

  const onLogin = () => authorize({ scope: 'openid profile email' })
    .then(() => getCredentials())
    .then(setCredentials)
    .then(() => setAuthenticating(false))
    .then(() => log.info!(`Authentication successful for ${user}`))
    .catch((e) => log.error("Error while authenticating !", e));

  const onResumeSession = () => getCredentials()
    .then(setCredentials)
    .then(() => setAuthenticating(false))
    .then(() => log.info!(`Already authenticated as ${user.name}`))
    .catch((e) => log.error("Error while loading crdentials !", e));

  useEffect(() => {
    if (!isLoading && !authenticating && !credentials) {
      setAuthenticating(true);
      user && onResumeSession() || onLogin();
    }
  }, [user, isLoading, authenticating])

  return (
    <>
      {
        (user && credentials && !authenticating)
        &&
        (<Main credentials={credentials} />)
        ||
        (<View style={styles.absoluteFill}>
          <ActivityIndicator />
        </View>)
      }
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={'#151414'}
        barStyle={'light-content'}
        animated={true}
        hidden={false}
      />
      <Auth0Provider domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN} clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID}>
        <MainView />
      </Auth0Provider>
    </>
  );
}