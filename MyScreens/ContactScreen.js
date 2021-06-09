import React, { useContext, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image, Button
} from 'react-native';
import { WebView } from "react-native-webview";
import {  Dimensions } from 'react-native'
import s from './style';
import { Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { HeaderBackButton } from '@react-navigation/stack';

let ScreenHeight = Dimensions.get("window").height;

const latitude = "40.75869042509398";
const longitude = "-73.91827323289473";
const label = "40-19 Broadway, Long Island City, NY 11103, EE. UU.";

const url = Platform.select({
  ios: "maps:" + latitude + "," + longitude + "?q=" + label,
  android: "geo:" + latitude + "," + longitude + "?q=" + label
});
const Contact = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <LinearGradient colors={['#9c0101', '#9c0101', '#9c0101']} style={styles.linearGradient}>
            <HeaderBackButton tintColor={'white'}
              onPress={() => navigation.goBack()} style={{ marginLeft: -10, marginTop: 10 }} />
            <View style={s.userContainer2}>
              <Image style={s.userImagen, { width: 380, height: 350 }} source={require('./logo.png')} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 0 }}>
              <Text style={{ fontSize: 40, color: '#FFF', fontWeight: 'bold' }}>Contact Us</Text>
              <Text onPress={() => { Linking.openURL('tel:7189322424'); }}
                style={{ fontSize: 30, color: '#FFF', marginTop: 10, fontWeight: 'bold' }}>(718)-932-2424
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:pollosmarioastoriabroadway@gmail.com')}>
                <Text style={{ fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >pollosmarioastoriabroadway@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  return Linking.openURL(url);
                } else {
                  const browser_url =
                    "https://www.google.de/maps/@" +
                    latitude +
                    "," +
                    longitude +
                    "?q=" +
                    label;
                  return Linking.openURL(browser_url);
                }
              })}>
                <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFF', marginTop: 10, fontWeight: 'bold' }} >40-19 Broadway, Long Island City, NY 11103, EE. UU.</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#9c0101'
  },

  titulo: {

    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 70 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 90,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});
export default Contact;