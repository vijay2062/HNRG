import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Speedometer, {
  Background,
  max,
  Arc,
  Needle,
  Progress,
  accentColor,
  Marks,
  colour,
  Indicator,
  DangerPath,
} from 'react-native-cool-speedometer';

// a few lines later ...


export default function Gas({navigation,name,data}) {
  return (
    <View>
    <View style={{margin:2,alignItems:'center'}}>
        <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer
        max={180}
       width={150}
       accentColor = '#ffff00'
        value={data.R}
        fontFamily='squada-one'
        colour = {'yellow'}
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={8} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath  angle={30}/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>R</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer width={150}
        value={data.PPM}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={8} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>PPM</Text>
      </View>
      
      </View>
      </View>
      <View
      style={{
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
      }}>
        <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer
      
       width={150}
        value={data.LOD}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={8} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>LOD</Text>
      </View>
      </View>
      <View style={{marginHorizontal:10, marginVertical:10}}>
      <Speedometer width={150}
        value={data.LOQ}
        fontFamily='squada-one'
      >
        <Background />
        <Arc/>
        <Needle/>
        <Progress/>
        <Marks fontSize={8} numbersRadius={10}/>
        <Indicator fontSize={20}/>
        <DangerPath/>
      </Speedometer>
      <View style={{alignSelf:'center'}}>
      <Text style={{alignItems:'center',justifyContent:'center'}}>LOQ</Text>
      </View>
      </View>
      </View>
     
    </View>
    </View>
  );
  <Text>ramram</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
