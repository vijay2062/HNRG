/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Button, View, Text } from 'react-native';

import Gas from '../screens/Gas';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


const gases=[{name:'NO2',data:{R:'10',PPM:'10',LOD:'10',LOQ:'10'}},{name:'H2S',data:{R:'30',PPM:'50',LOD:'60',LOQ:'70'}},{name:'CO2',data:{R:'30',PPM:'50',LOD:'60',LOQ:'70'}},{name:'CO',data:{R:'30',PPM:'50',LOD:'60',LOQ:'70'}},{name:'SO2',data:{R:'30',PPM:'50',LOD:'60',LOQ:'70'}}];
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{margin:4 , width:100}}>
      <Button
        title="Gases"
        onPress={() => navigation.navigate('Gases')}
      />
      </View>
      <View style={{margin:4, width:100}}>
       <Button
        title="VOCS" 
        onPress={() => navigation.navigate('VOCS')}
      />
      </View>
    </View>
  );
}

function Gases({ navigation }) {
 
  return (
    
     
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    {gases.map((gas,idx)=>(
      
      <View key={idx} style={{margin:4 ,width:100}}>
      <Button
        title={gas.name}
        onPress={() => navigation.navigate(gas)}
      />
      </View>


    ))}
    </View>
    
  );
}
function VOCS({ navigation }) {
  return (

    <View style={{ flex: 3, alignItems: 'center' }}>
      {gases.map((gas,idx)=>(
      
      <View key={idx} style={{margin:4 ,width:100}}>
      <Button
        title={gas.name}
        onPress={() => navigation.navigate(gas.name)}
      />
      </View>    ))}
    </View>
  );
}



function RootNavigator() {
  return (
    <Stack.Navigator >
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VOCS" component={VOCS} />
      <Stack.Screen name="Gases" component={Gases} />
      {gases.map((gas,idx)=>(
        <Stack.Screen name={gas.name} key={idx}>
          {props=> <Gas name={gas.name} data={gas.data} />}
          </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */


