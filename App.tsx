import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { PhotoInputPage } from './src/pages/PhotoInputPage';
import { ProductPage } from './src/pages/ProductPage';
import { HomePage } from './src/pages/HomePage';
import { LoginPage } from './src/pages/Login';
import { SingUp } from './src/pages/SingUp';

import { StyleSheet, Text, View } from 'react-native';
import { CardPage } from './src/pages/CardPage';
import { CartPage } from './src/pages/CartPage';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoginPage /> */}
      {/* <SingUp /> */}
      {/* <PhotoInputPage /> */}
      {/* <HomePage /> */}
      {/* <ProductPage /> */}
      {/* <CardPage /> */}
      <CartPage />
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
