import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import { styles } from './styles';
import TextInput from '../../../components/TextInput';
//services------------------
import React, { useEffect, useState } from 'react';
import { AuthState, VerfiyAccountRequestDto } from '../model/auth';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authSelected } from '../services/selectors';
import { forgetPasswordFunction } from '../services/crudFunctions';
import { router } from 'expo-router';

export const ForgetPassword = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const isFirstRender = React.useRef(true);
  const isSessionRender = React.useRef(true);

  const forgetPasswordData = useSelector<any, any['authSlice']>(
    authSelected
  ).forgotPassword;

  console.log('Login data is Data is-->', forgetPasswordData);

  useEffect(() => {
    if (!isSessionRender.current) {
      const signUpStatus = forgetPasswordData
        ? forgetPasswordData.status === 'success'
          ? true
          : false
        : false;
      console.log('checkpoint signup status', forgetPasswordData);
      if (signUpStatus) {
        router.replace('/auth/forgotPassword/verifyOtp');
      } else {
        console.log('checkpoint 3');
      }
    }
  }, [forgetPasswordData]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ValidationSchema = yup.object().shape({
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup
      .string()
      .email('Invalid Email')
      .min(3, 'must be at least 3 characters long')
      .required('Email is Required'),
  });

  const handleFormSubmit = async (values: any) => {
    //setIsLoading(true);
    const formData: VerfiyAccountRequestDto = {
      email: values.email.trim(),
      phoneNumber: values.phoneNumber,
    };
    isFirstRender.current = false;
    isSessionRender.current = false;
    dispatch<any>(forgetPasswordFunction(formData));
  };

  return (
    <>
      <Background>
        <Logo />
        <Header children={'ADVOCATE'} />

        <Formik
          initialValues={{
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

              <Button mode='contained' onPress={() => handleSubmit()}>
                Get OTP
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
