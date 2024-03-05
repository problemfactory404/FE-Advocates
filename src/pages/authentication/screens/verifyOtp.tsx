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

export const VerifyOtp = ({ navigation }: any) => {
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

  const otpRegExp = /^\d{6}$/;

  const ValidationSchema = yup.object().shape({
    otp: yup.string().matches(otpRegExp, 'OTP is not valid'),
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
            otp: '',
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
                label='OTP'
                returnKeyType='next'
                value={values.otp}
                onChangeText={handleChange('otp')}
                error={errors.otp ? true : false}
                errorText={errors.otp}
                autoCapitalize='none'
                mode='outlined'
              />

              <Button mode='contained' onPress={() => handleSubmit()}>
                Verify OTP
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
