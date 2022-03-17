import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function ButtonUser() {
  return (
    <View style={styles.container}>
      <Icon name={'user-o'} style={styles.icon} />
    </View>
  );
}
