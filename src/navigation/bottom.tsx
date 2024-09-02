import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, SCREENS} from '../utils/constants';
import HomeScreen from '../screens/bottomTabs/home';
import ListScreen from '../screens/bottomTabs/list';
import {Text} from 'react-native';
import {useTypedDispatch} from '../hooks/redux';
import {attemptsActions} from '../utils/redux/slices/counters';

const Tab = createBottomTabNavigator();
const RightHeaderComponent = () => {
  const dispatch = useTypedDispatch();
  const onPress = () => {
    dispatch(attemptsActions.reset());
  };

  return (
    <Text onPress={onPress} style={{marginRight: 10, color: COLORS.black}}>
      Reset
    </Text>
  );
};
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
        headerRight: () => <RightHeaderComponent />,
      }}>
      <Tab.Screen name={SCREENS.Home} component={HomeScreen} />
      <Tab.Screen name={SCREENS.List} component={ListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabRouter;
