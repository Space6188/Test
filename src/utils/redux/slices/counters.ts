import {createSlice} from '@reduxjs/toolkit';
import {ICharacter, IReduxCharacterDTO} from '../../../types/ICharacter';
import userDTO from '../../DTO/userDTO';

type IInitialState = {
  users: IReduxCharacterDTO[];
  accessDenied: number;
  accessGranted: number;
};

const initialState: IInitialState = {
  users: [],
  accessDenied: 0,
  accessGranted: 0,
};

const includesUser = (
  state: IInitialState,
  previosAttempt: IReduxCharacterDTO,
  payload: {user: ICharacter; access: boolean},
) =>
  (state.users = state.users.map(user =>
    user.id === previosAttempt.id
      ? {...user, attempts: user.attempts + 1, access: payload.access}
      : user,
  ));

const newUser = (
  state: IInitialState,
  payload: {user: ICharacter; access: boolean},
) => {
  const user = userDTO(payload.user);
  state.users.push({...user, attempts: 1, access: payload.access});
};

const attemptsSlice = createSlice({
  name: 'attempts',
  initialState,
  reducers: {
    add: (state, {payload}: {payload: {user: ICharacter; access: boolean}}) => {
      const previosAttempt = state.users.find(
        user => user.id === payload.user.id,
      );

      console.log(previosAttempt, 'previosAttempt', '\n', payload.user);

      if (payload.access) {
        state.accessGranted += 1;
      } else {
        state.accessDenied += 1;
      }

      if (previosAttempt) {
        includesUser(state, previosAttempt, payload);
      } else {
        newUser(state, payload);
      }
    },
    reset: state => initialState,
  },
});

export const {actions: attemptsActions, reducer: attemptsReducer} =
  attemptsSlice;
