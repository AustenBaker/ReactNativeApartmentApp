import * as React from 'react';
import { Text, View, Image } from 'react-native';

var studio = require ('../images/floorplans/FloorPlan-Studio.jpg');
var onebed = require ('../images/floorplans/FloorPlan-1Bed.jpg');
var twobed = require ('../images/floorplans/FloorPlan-2Bed.jpg');

export default function FloorPlansScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>These are our floorplans!</Text>
      <Image source={studio} style={{width:400,height:200,margin:10}} />
      <Image source={onebed} style={{width:400,height:200,margin:10}} />
      <Image source={twobed} style={{width:400,height:200,margin:10}} />
    </View>
  );
}