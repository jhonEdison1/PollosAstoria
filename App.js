import 'react-native-gesture-handler'
import React, { useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { WebView } from "react-native-webview";
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen'
import MyDrawer from './MyDrawer/index'

export default function App(){

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.init('4f7773ac-58d4-4e93-9722-684a98a730f4', {
      kOSSettingsKeyAutoPrompt: true,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2);

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
 
    SplashScreen.hide()
    // StatusBar.setBarStyle('dark-content');
    // StatusBar.setBackgroundColor('blue');

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  const onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  const onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = (device) => {
    console.log('Device info: ', device);
  };




  return(
    <MyDrawer/>
  )
}