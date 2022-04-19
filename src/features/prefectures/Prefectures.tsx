import { CSSProperties, FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPrefectures, selectPrefecture, togglePrefectureCheck } from './prefecturesSlice'

const sContainer: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
}

const sPrefLabel: CSSProperties = {
  cursor: 'pointer',
}

export const Prefectures: FC<{}> = () => {
  const pref = useAppSelector(selectPrefecture)
  const d = useAppDispatch()
  useEffect(() => {
    d(getPrefectures())
  }, [d])
  return (
    <div style={sContainer}>
      {pref.status === 'loading' && <div>loading</div>}
      {pref.prefectures.map(p => (
        <label key={p.prefCode} style={sPrefLabel}>
          <input type="checkbox" checked={p.prefCode === pref.selectedPrefCode}
                 onChange={() => d(togglePrefectureCheck(p.prefCode))}/>
          {p.prefName}
        </label>
      ))}
    </div>
  )
}
