import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import { styles } from './styles';
import TextInput from '../../../components/TextInput';
//services------------------
import React, { useEffect, useState } from 'react';
import { AuthState, SignInRequestDto, SignUpRequestDto } from '../model/auth';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authSelected } from '../services/selectors';
import { signUpFunction } from '../services/crudFunctions';
import { router } from 'expo-router';

export const SignUp = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const isFirstRender = React.useRef(true);
  const isSessionRender = React.useRef(true);

  const signupData = useSelector<any, any['authSlice']>(authSelected).signUp;

  console.log('Login data is Data is-->', signupData);

  useEffect(() => {
    if (!isSessionRender.current) {
      const signUpStatus = signupData
        ? signupData.status === 'success'
          ? true
          : false
        : false;
      console.log('checkpoint signup status', signupData);
      if (signUpStatus) {
        router.replace('/auth/signin/');
      } else {
        console.log('checkpoint 3');
      }
    }
  }, [signupData]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .required('Name is Required'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup
      .string()
      .email('Invalid Email')
      .min(3, 'must be at least 3 characters long')
      .required('Email is Required'),
    password: yup.string().required('Password is Required'),
  });

  const handleFormSubmit = async (values: any) => {
    //setIsLoading(true);
    const formData: SignUpRequestDto = {
      name: values.name,
      email: values.email.trim(),
      phoneNumber: values.phoneNumber,
      password: values.password,
    };
    isFirstRender.current = false;
    isSessionRender.current = false;
    dispatch<any>(signUpFunction(formData));
  };

  return (
    <>
      <Background>
        <Logo />
        <Header children={'ADVOCATE'} />

        <Formik
          initialValues={{
            name: '',
            password: '',
            phoneNumber: '',
            email: '',
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
                label='Name'
                returnKeyType='next'
                value={values.name}
                onChangeText={handleChange('name')}
                error={errors.name ? true : false}
                errorText={errors.name}
                autoCapitalize='none'
                mode='outlined'
              />
              <TextInput
                label='Phone Number'
                returnKeyType='next'
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                errorText={errors.phoneNumber}
                autoCapitalize='none'
                mode='outlined'
              />
              <TextInput
                label='Email'
                returnKeyType='next'
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email ? true : false}
                errorText={errors.email}
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

              <Button mode='contained' onPress={() => handleSubmit()}>
                Signup
              </Button>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => router.replace('/auth/signin/')}>
                  <Text style={styles.link}>Go Back To Sign In</Text>
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
