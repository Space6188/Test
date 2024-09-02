import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {IReduxCharacterDTO} from '../types/ICharacter';
import ReloadSVG from '../assets/reload-svgrepo-com.svg';
import DiniedSVG from '../assets/denied-svgrepo-com.svg';
import SuccessSVG from '../assets/book-check-education-svgrepo-com.svg';
import useTypedNavigation from '../hooks/useTypedNavigation';
import {SCREENS} from '../utils/constants';

const UserListCard = ({user}: {user: IReduxCharacterDTO}) => {
  const navigation = useTypedNavigation();
  const onCardPressed = () => {
    navigation.navigate(SCREENS.UserDetails, {user});
  };
  const onReloadPressed = () => {
    navigation.navigate(SCREENS.Home, {id: user.id});
  };
  return (
    <Pressable onPress={onCardPressed} style={styles.container} key={user.id}>
      <View style={styles.row}>
        {user.image ? (
          <Image source={{uri: user.image}} style={styles.image} />
        ) : (
          <View style={styles.noImage} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>Attempts: {user.attempts}</Text>
        </View>
      </View>

      {user.access ? (
        <SuccessSVG width={35} height={35} />
      ) : (
        <View style={styles.row}>
          <ReloadSVG
            onPress={onReloadPressed}
            width={35}
            height={35}
            style={styles.iconMargin}
          />
          <DiniedSVG width={35} height={35} />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 70,
  },
  noImage: {
    width: 50,
    height: 70,
    alignItems: 'center',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconMargin: {
    marginRight: 10,
  },
});

export default UserListCard;
