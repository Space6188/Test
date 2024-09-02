import {ScreenWrapper} from '../../components/wrapper/screenWrapper';
import Counter from '../../components/counter';
import selectorService from '../../services/selectors';
import {useTypedSelector} from '../../hooks/redux';
import {ScrollView} from 'react-native';
import UserListCard from '../../components/userListItem';
import {IReduxCharacterDTO} from '../../types/ICharacter';

const renderCards = (array: {users: IReduxCharacterDTO[]}) =>
  array.users.map(user => <UserListCard key={user.id} user={user} />);
const List = () => {
  const array = useTypedSelector(selectorService.getAttempts);
  console.log(array.users);

  return <ScrollView>{renderCards(array)}</ScrollView>;
};

const ListScreen = () => {
  return (
    <ScreenWrapper>
      <Counter />
      <List />
    </ScreenWrapper>
  );
};

export default ListScreen;
