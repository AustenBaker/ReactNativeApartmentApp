import React, { useState } from 'react';
import { Text, View, Image, ListItem, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/card';

var studio = require('../images/floorplans/FloorPlan-Studio.jpg');
var onebed = require('../images/floorplans/FloorPlan-1Bed.jpg');
var twobed = require('../images/floorplans/FloorPlan-2Bed.jpg');
//TODO: Implement either FlatList or ScrollView, dynamically render sizes

export default function FloorPlansScreen({ navigation }) {
  const [floorplans] = useState([
    { title: 'Studio', subtitle: 'Bronze', floorplanImage: '../images/floorplans/FloorPlan-Studio.jpg' },
    { title: 'Studio', subtitle: 'Silver', floorplanImage: '../images/floorplans/FloorPlan-Studio.jpg' },
    { title: 'Studio', subtitle: 'Gold', floorplanImage: '../images/floorplans/FloorPlan-Studio.jpg' },
    { title: 'One Bedroom', subtitle: 'Bronze', floorplanImage: '../images/floorplans/FloorPlan-1Bed.jpg' },
    { title: 'One Bedroom', subtitle: 'Silver', floorplanImage: '../images/floorplans/FloorPlan-1Bed.jpg' },
    { title: 'One Bedroom', subtitle: 'Gold', floorplanImage: '../images/floorplans/FloorPlan-1Bed.jpg' },
    { title: 'Two Bedroom', subtitle: 'Bronze', floorplanImage: '../images/floorplans/FloorPlan-2Bed.jpg' },
    { title: 'Two Bedroom', subtitle: 'Silver', floorplanImage: '../images/floorplans/FloorPlan-2Bed.jpg' },
    { title: 'Two Bedroom', subtitle: 'Gold', floorplanImage: '../images/floorplans/FloorPlan-2Bed.jpg' },
  ]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>These are our floorplans!</Text>
      <FlatList
        data={floorplans}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FloorPlanDetails', item)}>
            <Card>
              <Text>{ item.title }</Text>
              <Text>{ item.subtitle }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}