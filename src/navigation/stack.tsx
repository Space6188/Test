import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/constants';
import BottomTabRouter from './bottom';
import {NavigationContainer} from '@react-navigation/native';
import UserDetailsScreen from '../screens/stackTabs/userDetails';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREENS.BottomRouter}
          options={{headerShown: false}}
          component={BottomTabRouter}
        />
        <Stack.Screen
          name={SCREENS.UserDetails}
          options={({route}) => ({
            title: route.params?.user.name,
            headerShown: true,
          })}
          component={UserDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
