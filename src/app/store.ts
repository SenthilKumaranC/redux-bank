import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bankSlice from '../features/bank/bank.slice';
import counterReducer from '../features/counter/counterSlice';
import transactionsSlice from '../features/transactions/transactions.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank : bankSlice.reducer,
    transactions: transactionsSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
