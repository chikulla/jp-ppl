import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPopulationComposition } from './popCompositionAPI'
import { SliceState } from '../../app/common/slice'
import { RootState } from '../../app/store'

export interface PlotData {
  year: number,
  value: number,
  rate?: number
}

export interface PopCompositionData {
  label: string
  data: PlotData[]
}

export interface PopulationComposition {
  boundaryYear: number,
  data: PopCompositionData[],
}

export const getPopComposition = createAsyncThunk(
  'popComposition/getPopCompositions',
  async(prefCode: number) => fetchPopulationComposition(prefCode),
)

export interface PopCompositionState {
  state: SliceState,
  value?: PopulationComposition
}

const initialState: PopCompositionState = {
  state: 'idle',
}

export const popCompositionSlice = createSlice({
  name: 'popComposition',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPopComposition.pending, state => {
        state.state = 'loading'
      })
      .addCase(getPopComposition.fulfilled, (state, action) => {
        state.state = 'idle'
        state.value = action.payload.result
      })
  },
})

export const popComposition = (state: RootState) => state.popComposition

export const popCompositionReducer = popCompositionSlice.reducer
