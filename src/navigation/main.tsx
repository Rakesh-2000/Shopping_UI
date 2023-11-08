import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screens/Splash';
import ProductList from '../screens/ProductList';
import Product from '../screens/Product';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';

export default function Main() {
  return <HomeNavigation />;
}
