import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/card';


export default function FloorPlanDetails({ navigation }) {
  return (
    <View>
      <Card>
        <Text>{ navigation.getParam('title') }</Text>    
      </Card>
    </View>
  )
}