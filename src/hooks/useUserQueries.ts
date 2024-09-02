import {useQuery} from 'react-query';
import userService from '../services/user';
import {useTypedDispatch, useTypedSelector} from './redux';
import {ICharacter} from '../types/ICharacter';
import {usersActions} from '../utils/redux/slices/users';

export const useGetUserIDS = () => {
  const ids = useTypedSelector(store => store.users?.ids);
  const dispatch = useTypedDispatch();
  useQuery(['ids'], userService.getUsers, {
    enabled: ids.length === 0,
    select: (data: ICharacter[]) => data.map(user => user.id),
    onSuccess: newIds => {
      dispatch(usersActions.addIDSArray(newIds));
    },
  });

  return ids;
};

export const useGetUser = (id: string): ICharacter | undefined => {
  const user = useQuery(['user', id], () => userService.getSingleUser(id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    select: (data: ICharacter[]) => (data.length > 0 ? data[0] : undefined),
  });
  return user.data;
};
