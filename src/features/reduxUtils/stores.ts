import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth';
import { useDispatch } from 'react-redux';

const makeStore = () => configureStore({
        reducer: {
        auth: authSlice.reducer,
    },
})
const store = makeStore();



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;