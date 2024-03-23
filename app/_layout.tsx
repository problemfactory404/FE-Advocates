import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import i18n from '../i18n.config';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

const MainLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
      }}>
      <I18nextProvider i18n={i18n}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <Provider store={store}>
            <Slot />
          </Provider>
        </PaperProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default MainLayout;
