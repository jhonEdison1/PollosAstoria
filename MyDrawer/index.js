import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
  import s from '../MyDrawer/style';
  import { WebView } from "react-native-webview";
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../MyScreens/HomeScreen';
import OrderScreen from '../MyScreens/OrderScreen';
import ContactScreen from '../MyScreens/ContactScreen';


function DrawerMenu(props) {
  return (
      <TouchableOpacity onPress={props.navigation}>
          <View style={s.menuContainer}>
              <View style={s.tituloContainer} >
                  <Text style={s.tituloTxt}>{props.titleName}</Text>
              </View>
          </View>
      </TouchableOpacity>
  )
}

function Menu(props) {

  return (
      <View style={s.container}>
          <View style={s.bgContainer}>

          </View>
          <View style={s.items}>
              <DrawerMenu iconName='logo' style={s.draweritem} titleName='User' navigation={() => props.navigation.navigate('Home')} />
              <DrawerMenu iconName='home' titleName='Order Online' navigation={() => props.navigation.navigate('Order')} />
              <DrawerMenu iconName='home' titleName='Contact Us' navigation={() => props.navigation.navigate('Contact')}  />
      
          </View>

      </View>
  )
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function MyDrawer({ navigation }) {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: { backgroundColor: 'rgb(3, 46, 109)'},
      headerTintColor: '#fff', headerShown: false
       }}  />
      <Stack.Screen name="Order" component={OrderScreen} options={{headerStyle: { backgroundColor: '#9c0101'},
      headerTintColor: '#fff',  headerTitle: 'Home'
       }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{headerStyle: { backgroundColor: 'rgb(3, 46, 109)'},
      headerTintColor: '#fff', headerShown: false
       }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}
export default MyDrawer

  

  