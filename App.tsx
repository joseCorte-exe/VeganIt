import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoginPage } from './src/pages/Login';
import { SingUp } from './src/pages/SingUp';
import { PhotoInputPage } from './src/pages/PhotoInputPage';
import { HomePage } from './src/pages/HomePage'
import { ProductPage } from './src/pages/ProductPage';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage />
      {/* <SingUp /> */}
      {/* <PhotoInputPage /> */}
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
