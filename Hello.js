import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const Hello = ({name}) => {
  const message =`Hello, ${name}!`;
  return (
    <View>
      <Text testID="greeting">{message}</Text>
    </View>
  );
}

export default Hello;
