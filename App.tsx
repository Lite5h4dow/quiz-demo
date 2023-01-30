import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Linking from "expo-linking"

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { RootStackParamList } from './types';
const linking:LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
    config:{
      screens:{
      MenuScreen: "MenuScreen",
      QuizScreen: "QuizScreen",
      TentableScreen: "TentableScreen",
      NotFound: "*"
    }
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
	<NavigationContainer
	  linking={linking}
	>
	  <Navigation/>
	</NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
