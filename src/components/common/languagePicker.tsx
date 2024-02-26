import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    { name: 'hi', label: 'हिन्दी' },
    { name: 'en', label: 'English' },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      style={styles.languageButton}
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}>
      <Text style={styles.languageButtonText}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.languageButton, styles.languageButtonOpen]}
        onPress={() => setModalVisible(true)}>
        {/* displays the current app language */}
        <Text style={styles.languageButtonText}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  languageButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  languageButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  languageButtonOpen: {
    backgroundColor: '#2196F3',
  },
});

export default LanguagePicker;
