import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import { styles } from './styles';
import TextInput from '../../../components/TextInput';
//services------------------
import React, { useEffect, useState } from 'react';
import { AuthState, SignInRequestDto } from '../model/auth';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authSelected } from '../services/selectors';
import { getSignin } from '../services/crudFunctions';
import { router } from 'expo-router';

export const SignIn = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const isFirstRender = React.useRef(true);
  const isSessionRender = React.useRef(true);

  const loginData = useSelector<any, any['authSlice']>(authSelected).signIn;

  console.log('Login data is Data is-->', loginData);

  useEffect(() => {
    if (!isSessionRender.current) {
      if (loginData.data.access_token) {
        router.replace('/(pages)/dashboard');
      } else {
        console.log('checkpoint 3');
      }
    }
  }, [loginData]);

  const ValidationSchema = yup.object().shape({
    salutation: yup.string(),
    username: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .required('Username is Required'),
    password: yup.string().required('Password is Required'),
  });

  const handleFormSubmit = async (values: any) => {
    //setIsLoading(true);
    const formData: SignInRequestDto = {
      email: values.username.trim(),
      password: values.password,
    };
    isFirstRender.current = false;
    isSessionRender.current = false;
    dispatch<any>(getSignin(formData));
  };

  return (
    <>
      <Background>
        <Logo />
        <Header children={'ADVOCATE'} />

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <TextInput
                label='Username'
                returnKeyType='next'
                value={values.username}
                onChangeText={handleChange('username')}
                error={errors.username ? true : false}
                errorText={errors.username}
                autoCapitalize='none'
                mode='outlined'
              />
              <TextInput
                label='Password'
                returnKeyType='next'
                value={values.password}
                onChangeText={handleChange('password')}
                error={errors.password ? true : false}
                errorText={errors.password}
                autoCapitalize='none'
                mode='outlined'
              />

              <View style={styles.forgotPassword}>
                <TouchableOpacity
                  onPress={() => router.replace('/auth/forgotPassword/')}>
                  <Text style={styles.link}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <Button mode='contained' onPress={() => handleSubmit()}>
                Login
              </Button>
              <View style={styles.row}>
                <Text style={styles.label}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => router.replace('/auth/signup/')}>
                  <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </Background>
    </>
  );
};

const style = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  header: {
    fontSize: 24,
    marginLeft: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
