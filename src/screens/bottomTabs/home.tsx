import {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {ScreenWrapper} from '../../components/wrapper/screenWrapper';
import {useGetUser, useGetUserIDS} from '../../hooks/useUserQueries';
import {generateRandomID} from '../../utils/helpers/randomIDIndex';
import {useTypedDispatch} from '../../hooks/redux';
import {attemptsActions} from '../../utils/redux/slices/counters';
import Counter from '../../components/counter';
import ChooseHouseButton from '../../components/chooseHouseButton';
import {houseTabsARR} from '../../utils/data/houseTabs';
import UserCard from '../../components/userCard';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IRoute, IRoutes} from '../../types/routes';

const renderHouses = (onPress: (house: string) => void) =>
  houseTabsARR.map(house => (
    <ChooseHouseButton onPress={onPress} {...house} key={house.title} />
  ));

const HomeScreen = () => {
  const ids = useGetUserIDS();
  const route = useRoute<RouteProp<IRoute, IRoutes.homeScreen>>();
  const [userID, setUserID] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useTypedDispatch();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setUserID(ids[generateRandomID(ids)]);
    setRefreshing(false);
  }, [ids]);

  useEffect(() => {
    if (route.params?.id) {
      setUserID(route.params.id);
    } else {
      setUserID(ids[generateRandomID(ids)]);
    }
  }, [route]);

  const user = useGetUser(userID);

  const TabPressed = useCallback(
    (house: string) => {
      if (!user) {
        Alert.alert('Wait, user loading');
        return;
      }
      dispatch(
        attemptsActions.add({user, access: !house.localeCompare(user.house)}),
      );
      setUserID(ids[generateRandomID(ids)]);
    },
    [ids, dispatch, user],
  );

  return (
    <ScreenWrapper>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Counter />
        <UserCard user={user} />
        <View style={styles.housesContainer}>{renderHouses(TabPressed)}</View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  housesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
