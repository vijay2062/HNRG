import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);
export default function App() {
 const isLoadingComplete = useCachedResources();
 const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      
          <SafeAreaProvider>
     
    
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
     
    );
  }
}
