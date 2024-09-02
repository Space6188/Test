import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  DimensionValue,
} from 'react-native';
import {IHouseTabButtonProp} from '../types/houseTab';

const ChooseHouseButton = ({
  title,
  onPress,
  image,
  width = '40%',
}: IHouseTabButtonProp) => {
  const handlePress = () =>
    onPress(!title.localeCompare('Not in House') ? '' : title);
  const styles = style(width as DimensionValue);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.box}>
      {image && <Image source={{uri: image}} style={styles.image} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = (width: DimensionValue) =>
  StyleSheet.create({
    box: {
      width,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'rgba(0,0,0,0.4)',
      borderWidth: 1,
      marginBottom: 10,
    },
    image: {
      width: 70,
      height: 70,
    },
    text: {
      marginTop: 10,
    },
  });

export default ChooseHouseButton;
