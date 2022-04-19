import { SliceState } from '../../app/common/slice'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPrefectures } from './prefecturesAPI'
import { RootState } from '../../app/store'

export interface Prefecture {
  prefCode: number
  prefName: string
}

export interface PrefecturesState {
  prefectures: Prefecture[]
  status: SliceState
  selectedPrefCode?: number
}

const initialState: PrefecturesState = {
  prefectures: [],
  status: 'idle',
}

export const getPrefectures = createAsyncThunk(
  'prefectures/getPrefectures',
  fetchPrefectures,
)

export const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState,
  reducers: {
    togglePrefectureCheck: (state, action: PayloadAction<number | undefined>) => {
      if(state.selectedPrefCode === action.payload) {
        state.selectedPrefCode = undefined
      } else {
        state.selectedPrefCode = action.payload
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPrefectures.pending, state => {
        state.status = 'loading'
      })
      .addCase(getPrefectures.fulfilled, (state, action) => {
        state.status = 'idle'
        state.prefectures = action.payload.result
        // TODO: msg
      })
  },
})

export const selectPrefecture = (state: RootState) => state.prefecture

export const prefectureReducer = prefecturesSlice.reducer

export const {togglePrefectureCheck} = prefecturesSlice.actions
