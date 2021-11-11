import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './navigation';

import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {

  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');

  function checkStoredCredentials() {
    AsyncStorage.getItem('meeTourCredentials')
      .then(res => {
        if (res !== null) {
          setStoredCredentials(JSON.parse(res));
        }/* else{
          setStoredCredentials("");
        } */
      })
      .catch(err => console.log(err));
  }

  if (!appReady) {

    return (
      <AppLoading
        startAsync={async () => { console.log('loading') }}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )

  } else {

    return (

      <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>

        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
          </SafeAreaView>
        </SafeAreaProvider>

      </CredentialsContext.Provider>

    );

  }

}

//app original
/* export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {

    return (

      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>

    );

  }
} */
