import {useNavigation} from '@react-navigation/native';
import {INavigation} from '../types/navigation';

const useTypedNavigation = () => useNavigation<INavigation>();

export default useTypedNavigation;
