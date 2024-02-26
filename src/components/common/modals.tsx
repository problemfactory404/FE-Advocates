import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SuccessMessageModal = ({ messageTime, messageText }: any) => {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(false);
    }, messageTime);
  }, []);

  return (
    <View>
      <Modal isVisible={modalVisible} backdropOpacity={0.1}>
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{messageText}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SuccessMessageModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'green',
    width: '10%',
    height: 80,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
