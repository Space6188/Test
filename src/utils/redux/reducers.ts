import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {createTransform, persistReducer} from 'redux-persist';
import {stringify, parse} from 'flatted';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {usersReducer} from './slices/users';
import {attemptsReducer} from './slices/counters';
import {RootState} from './store';

const rootReducer = combineReducers({
  users: usersReducer,
  attempts: attemptsReducer,
});

export type reducersType = ReturnType<typeof rootReducer>;

export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [transformCircular],
};

const persistedReducer = persistReducer<reducersType, any>(
  persistConfig,
  rootReducer,
);

export default persistedReducer;
