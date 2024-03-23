import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../components/Button';
import Background from '../../../components/Background';
import Logo from '../../../components/Logo';
import Header from '../../../components/Header';
import { styles } from '../../authentication/screens/styles';
import TextInput from '../../../components/TextInput';
//services------------------
import React, { useEffect, useState } from 'react';
import { SignUpRequestDto } from '../../authentication/model/auth';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { router } from 'expo-router';
import { Icon, MD3Colors } from 'react-native-paper';
import { CreateMemberDto } from '../model/member';
import { addMemberFunction } from '../services/crudFunctions';

export const AddMember = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('admin');

  const [items, setItems] = useState([
    { label: 'ADMIN', value: 'admin' },
    { label: 'SUBADMIN', value: 'subadmin' },
    { label: 'USER', value: 'user' },
  ]);

  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const isFirstRender = React.useRef(true);
  const isSessionRender = React.useRef(true);

  const signupData = '';

  console.log('Login data is Data is-->', signupData);

  useEffect(() => {
    if (!isSessionRender.current) {
      const signUpStatus = signupData
        ? signupData === 'success'
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
    first_name: yup
      .string()
      .min(3, 'must be at least 3 characters long')
      .required('Name is Required'),
    last_name: yup.string().min(3, 'must be at least 3 characters long'),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone Number is required'),
    email: yup
      .string()
      .email('Invalid Email')
      .min(3, 'must be at least 3 characters long')
      .required('Email is Required'),
    password: yup.string().required('Password is Required'),
    // role: yup.string().required('Role is Required'),
  });

  const handleFormSubmit = async (values: any) => {
    //setIsLoading(true);
    const formData: CreateMemberDto = {
      first_name: values.first_name,
      email: values.email.trim(),
      phoneNumber: values.phoneNumber,
      password: values.password,
      last_name: values.last_name,
      role: value,
      address: '',
      identity_no: '',
      vehicle_no: '',
    };
    isFirstRender.current = false;
    isSessionRender.current = false;
    dispatch<any>(addMemberFunction(formData));
  };

  return (
    <>
      <Background>
        <Header children={'ADD MEMBER'} />

        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            password: '',
            phoneNumber: '',
            //role: 'ads',
            email: value,
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
                label='First Name'
                returnKeyType='next'
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                error={errors.first_name ? true : false}
                errorText={errors.first_name}
                autoCapitalize='none'
                mode='outlined'
              />
              <TextInput
                label='Last Name'
                returnKeyType='next'
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                error={errors.last_name ? true : false}
                errorText={errors.last_name}
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

              <DropDownPicker
                style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
                dropDownContainerStyle={{
                  backgroundColor: '#fff',
                  borderColor: 'grey',
                }}
                placeholder='Select Role'
                placeholderStyle={style.placeholderStyle}
                selectedItemLabelStyle={style.selectedTextStyle}
                dropDownDirection='BOTTOM'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onPress={() => setIsFocus(true)}
                onClose={() => setIsFocus(false)}
                showArrowIcon={true}
                ArrowUpIconComponent={({ style }) => (
                  <Icon source='account-tie' color={'grey'} size={25} />
                )}
                ArrowDownIconComponent={({ style }) => (
                  <Icon source='account-tie' color={'grey'} size={25} />
                )}
              />
              <Text></Text>

              <Button mode='contained' onPress={() => handleSubmit()}>
                ADD
              </Button>
            </>
          )}
        </Formik>
      </Background>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
