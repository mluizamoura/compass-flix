import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#EC2626" />
    </View>
  );
}

export default Loading;
