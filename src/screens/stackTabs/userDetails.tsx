import {View, Text, Image, StyleSheet} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useGetUser} from '../../hooks/useUserQueries';
import {IRoute, IRoutes} from '../../types/routes';

const UserDetailsScreen = () => {
  const route = useRoute<RouteProp<IRoute, IRoutes.userDetails>>();
  const user = route.params.user;
  return (
    <View style={styles.container}>
      {user.image ? (
        <Image source={{uri: user.image}} style={styles.image} />
      ) : (
        <View style={styles.noImage}>
          <Text style={styles.noImageText}>No Image</Text>
        </View>
      )}

      {!user.access ? (
        <Text style={styles.deniedText}>Denied Permissions</Text>
      ) : (
        <UserDetails id={user.id} />
      )}
    </View>
  );
};

const UserDetails = ({id}: {id: string}) => {
  const user = useGetUser(id);

  if (!user)
    return (
      <Text style={{alignSelf: 'center', color: 'red'}}>Fetching Error</Text>
    );

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailItem}>Name: {user.name}</Text>
      <Text style={styles.detailItem}>House: {user.house}</Text>
      <Text style={styles.detailItem}>Gender: {user.gender}</Text>
      <Text style={styles.detailItem}>Species: {user.species}</Text>
      <Text style={styles.detailItem}>
        Hogwarts Student: {user.hogwartsStudent ? 'Yes' : 'No'}
      </Text>
      <Text style={styles.detailItem}>
        Hogwarts Staff: {user.hogwartsStaff ? 'Yes' : 'No'}
      </Text>
      <Text style={styles.detailItem}>
        Wizard: {user.wizard ? 'Yes' : 'No'}
      </Text>
      <Text style={styles.detailItem}>Alive: {user.alive ? 'Yes' : 'No'}</Text>
      <Text style={styles.detailItem}>Patronus: {user.patronus}</Text>
      <Text style={styles.detailItem}>
        Wand: {user.wand.wood} wood, {user.wand.core} core,{' '}
        {user.wand.length ? `${user.wand.length} inches` : 'Unknown length'}
      </Text>
      <Text style={styles.detailItem}>Ancestry: {user.ancestry}</Text>
      <Text style={styles.detailItem}>
        Year of Birth: {user.yearOfBirth || 'Unknown'}
      </Text>
      <Text style={styles.detailItem}>Eye Colour: {user.eyeColour}</Text>
      <Text style={styles.detailItem}>Hair Colour: {user.hairColour}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 140,
    marginBottom: 20,
  },
  noImage: {
    width: 100,
    height: 140,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  noImageText: {
    color: 'darkgray',
  },
  deniedText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default UserDetailsScreen;
