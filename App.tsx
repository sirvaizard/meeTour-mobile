import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {

  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');



  function checkStoredCredentials(){
    AsyncStorage.getItem('meeTourCredentials')
      .then(res => {
        if(res !== null){
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
        startAsync={async () => {console.log('placeholder')}}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )

  } else {

    return (

      <CredentialsContext.Provider value={ {storedCredentials, setStoredCredentials} }>

        <SafeAreaProvider>
          <Navigation />
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
