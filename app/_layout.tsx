import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import i18n from '../i18n.config';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MainLayout = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <PaperProvider>
          <Provider store={store}>
            <Slot />
          </Provider>
        </PaperProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default MainLayout;
