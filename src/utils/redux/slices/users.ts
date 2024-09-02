import {createSlice} from '@reduxjs/toolkit';

type IIds = string[];
type IPayload = {payload: IIds};

const initialState: {ids: IIds} = {
  ids: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addIDSArray: (state, {payload}: IPayload) => {
      state.ids.push(...payload);
    },
  },
});

export const {actions: usersActions, reducer: usersReducer} = usersSlice;
