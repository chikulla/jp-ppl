import React from 'react'
import './App.css'
import { Prefectures } from './features/prefectures/Prefectures'
import { PopulationCompositionCharts } from './features/pop-composition/PopulationCompositionCharts'
import { useAppSelector } from './app/hooks'
import { selectPrefecture } from './features/prefectures/prefecturesSlice'

function App() {
  const pref = useAppSelector(selectPrefecture)
  return (
    <div className="App">
      <Prefectures/>
      <PopulationCompositionCharts prefCode={pref.selectedPrefCode}/>
    </div>
  )
}

export default App
