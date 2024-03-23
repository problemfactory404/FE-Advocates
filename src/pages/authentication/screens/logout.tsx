import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { removeReduxToken } from '../services/crudFunctions';
import { useDispatch } from 'react-redux';
import {
  getStorageData,
  removeData,
} from '../../../utils/localStorage/localStorage';
import { router } from 'expo-router';

const Logout = () => {
  const dispatch = useDispatch();
  const logoutFunction = async () => {
    try {
      const token = await getStorageData('token');
      if (token) {
        // Use token for API requests or other purposes

        setTimeout(() => {
          dispatch<any>(removeReduxToken(token));
          removeData('token');
          router.replace('/auth/signin/');
        }, 3000);
      } else {
        // Handle case where token is not available
        console.log('checkpoint 3');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  logoutFunction();

  return (
    <View>
      <Text>Logiing you out ....</Text>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
