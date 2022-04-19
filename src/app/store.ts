import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { prefectureReducer } from '../features/prefectures/prefecturesSlice'
import { popCompositionReducer } from '../features/pop-composition/popCompositionSlice'

export const store = configureStore({
  reducer: {
    prefecture: prefectureReducer,
    popComposition: popCompositionReducer,
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
