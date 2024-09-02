import {ActivityIndicator, Image, Text, View, StyleSheet} from 'react-native';
import {ICharacter} from '../types/ICharacter';
import {COLORS} from '../utils/constants';

const UserCard = ({user}: {user?: ICharacter}) => {
  if (!user) return <ActivityIndicator size="large" color={COLORS.black} />;

  return (
    <View style={styles.container}>
      {user.image ? (
        <Image source={{uri: user.image}} style={styles.image} />
      ) : (
        <View style={styles.image}>
          <Text>No image</Text>
        </View>
      )}
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 200,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default UserCard;
