import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../utils/constants';
import HomeScreen from '../screens/bottomTabs/home';
import ListScreen from '../screens/bottomTabs/list';

const Tab = createBottomTabNavigator();

const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          marginLeft: 10,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name={SCREENS.Home} component={HomeScreen} />
      <Tab.Screen name={SCREENS.List} component={ListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabRouter;
