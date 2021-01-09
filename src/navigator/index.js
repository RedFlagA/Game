import React, {Component} from 'react';
import {Image} from 'react-native';
import {Style} from '@common/index';
import {Images} from '@config';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Home, Intro} from '@screens/index';
import TabBar from './TabBar';
const TabStack = createMaterialTopTabNavigator();
const TabStackScreen = () => (
  <TabStack.Navigator
    tabBar={(props) => <TabBar {...props} />}
    initialRouteName={'Home'}
    swipeEnabled={true}
    lazy={true}
    tabBarPosition={'bottom'}
    tabBarOptions={{
      activeTintColor: '#e32538',
      inactiveTintColor: '#b9b9b9',
    }}>
    <TabStack.Screen
      name={'Home'}
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_home}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
  </TabStack.Navigator>
);
// const AuthStack = createStackNavigator();
// const AuthStackScreen = () => {
//   return (
//     <AuthStack.Navigator headerMode={'none'}>
//       <AuthStack.Screen name="Login" component={Login} />
//     </AuthStack.Navigator>
//   );
// };

// const MainStack = createStackNavigator();
// const MainStackScreen = () => (
//   <MainStack.Navigator initialRouteName={'TabStackScreen'} headerMode={'none'}>
//     <MainStack.Screen name={'Home'} component={Home} />
//     <Stack.Screen name={'TabStackScreen'} component={TabStackScreen} />
//   </MainStack.Navigator>
// );

const Stack = createStackNavigator();

class RootStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name={'Intro'} component={Intro} />
          <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default RootStack;
