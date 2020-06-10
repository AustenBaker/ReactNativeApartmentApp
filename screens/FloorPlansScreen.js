import * as React from 'react';
import { Text, View, Image, ListItem } from 'react-native';
import { Card } from 'react-native-elements';

//TODO: Implement either FlatList or ScrollView, dynamically render sizes
const floorplanObjects = [
  {
    title: 'Studio',
    floorplanImage: '../images/floorplans/FloorPlan-Studio.jpg',
  },
  {
    title: 'One Bedroom',
    floorplanImage: '../images/floorplans/FloorPlan-1Bed.jpg',
  },
  {
    title: 'Two Bedroom',
    floorplanImage: '../images/floorplans/FloorPlan-2Bed.jpg',
  },
]
var studio = require ('../images/floorplans/FloorPlan-Studio.jpg');
var onebed = require ('../images/floorplans/FloorPlan-1Bed.jpg');
var twobed = require ('../images/floorplans/FloorPlan-2Bed.jpg');

export default function FloorPlansScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>These are our floorplans!</Text>
      <Card
        title='Studio'
        image={require('../images/floorplans/FloorPlan-Studio.jpg')}>
      </Card>
      <Card
        title='One-Bedroom'
        image={require('../images/floorplans/FloorPlan-1Bed.jpg')}>
      </Card>
      <Card
        title='Two-Bedroom'
        image={require('../images/floorplans/FloorPlan-2Bed.jpg')}>
      </Card>
        {
          floorplanObjects.map((u, i) => {
            return (
              <View key={i}>
                <Image
                  resizeMode="cover"
                  source={{ uri: u.floorplanImage }}
                />
                <Text>{u.title}</Text>
              </View>
            );
          })
        }
      <Card>

      </Card>
    </View>
  );
}