import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DataTable, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMember, getMembersList } from '../services/crudFunctions';
import { authSelected } from '../../authentication/services/selectors';
import { memberSelected } from '../services/selectors';
import CardView from '../../../components/CardView';
import { ToastBar } from '../../../components/ToastBar';
import { router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

const table_Headers = [
  { id: 1, label: 'firstName' },
  { id: 2, label: 'lastName' },
  { id: 3, label: 'role' },
];

const MemberList = () => {
  const dispatch = useDispatch();
  const membersList = useSelector<any, any['memberSlice']>(
    memberSelected
  ).membersList;
  const deletedData = useSelector<any, any['memberSlice']>(
    memberSelected
  ).deleteStatus;
  const token = useSelector<any, any['authSlice']>(authSelected).token;
  const [memebrsData, setMembersData] = useState([]);
  const isDeleteRender = React.useRef(true);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  console.log('DELETE STATUS', deletedData);

  useEffect(() => {
    if (token !== null) {
      dispatch<any>(getMembersList(token));
    } else {
      console.log('checkpoint 3');
    }
  }, []);

  useEffect(() => {
    console.log('checkpoint abc');
    console.log('checkpoint abcd');
    if (!isDeleteRender.current) {
      if (deletedData && deletedData.value === true) {
        console.log('checkpoint abcde');
        setSuccessMsg('Member deleted successfully.');

        setTimeout(() => {
          setSuccessMsg('');
        }, 2000);

        dispatch<any>(getMembersList(token));
      } else {
        setErrorMsg(deletedData);
        setTimeout(() => {
          setErrorMsg('');
        }, 2000);
      }
    } else {
      console.log('checkpoint ELSE RENDER');
      isDeleteRender.current = false;
    }
  }, [deletedData]);

  useEffect(() => {
    if (membersList !== null) {
      const extractedArray = membersList.data.users.map((originalObj: any) => ({
        id: originalObj.id,
        firstName: originalObj.first_name,
        lastName: originalObj.last_name,
        role: originalObj.role,
      }));
      setMembersData(extractedArray);
    }
  }, [membersList]);

  const function_Object = {
    goToUpdate: (memberId: any) => {
      router.replace(`/(pages)/member/updateMember/${memberId}`);
    },
    goToDelete: (id: string) => {
      dispatch<any>(deleteMember(id));
    },
  };

  return (
    <>
      <IconButton
        icon='account-plus'
        iconColor={'#6750a4'}
        size={40}
        onPress={() => router.replace('/(pages)/member/addMember')}
      />

      <CardView
        title='first_name'
        headers={table_Headers}
        data={memebrsData}
        functions={function_Object}
        propertyNames={['firstName', 'lastName']}
      />

      {successMsg && <ToastBar status={'success'} message={successMsg} />}
      {errorMsg && <ToastBar status={'error'} message={errorMsg} />}
    </>
  );
};

export default MemberList;

const styles = StyleSheet.create({});
