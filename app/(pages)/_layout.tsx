import { useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerActions } from '@react-navigation/native';
import { router } from 'expo-router';
import { theme } from '../../src/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon } from 'react-native-paper';

const DrawerNavigation = () => {
  const dimensions = useWindowDimensions();
  const x = theme.colors.background;
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
        drawerStyle: {
          width: 200,
          backgroundColor: theme.colors.background,
        },
        drawerActiveBackgroundColor: 'transparent',
        headerTitle: '',
        headerStyle: {
          backgroundColor: theme.colors.header,
          height: 50,
        },
      }}>
      <Drawer.Screen
        name='dashboard'
        options={{
          drawerLabel: 'Dashboard',
          title: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name='clients'
        options={{
          drawerLabel: 'Clients',
          title: 'Clients',
          drawerIcon: ({ color, size }) => (
            <Icon source='file-account' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='member'
        options={{
          drawerLabel: 'Members',
          title: 'Members',
          drawerIcon: ({ color, size }) => (
            <Icon source='account-group' color={color} size={size} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name='logout'
        options={{
          drawerLabel: 'Logout',
          title: 'Logout',
          drawerIcon: ({ color, size }) => (
            <Icon source='logout' color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerNavigation;
