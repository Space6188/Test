import {AppDispatch, RootState} from '../utils/redux/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;
