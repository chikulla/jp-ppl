import { FC, useEffect } from 'react'
import { getPopComposition, popComposition, PopCompositionData } from './popCompositionSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { PopulationCompositionChart } from './PopulationCompositionChart'

export const PopulationCompositionCharts: FC<{ prefCode?: number }> = ({prefCode}) => {
  const s = useAppSelector(popComposition)
  const d = useAppDispatch()
  useEffect(() => {
    if (prefCode !== undefined) {
      d(getPopComposition(prefCode))
    }
  }, [prefCode])


  return (
    <div style={{margin: '1rem'}}>
      {s.state === 'loading' && <div>loading...</div>}
      {s.state === 'idle' && prefCode !== undefined && s.value &&
        <div>
          {s.value.data.map((d: PopCompositionData, i) => (
            <div key={i}>
              <h4 style={{textAlign: 'center'}}>{d.label}</h4>
              <PopulationCompositionChart boundaryYear={s.value!.boundaryYear} data={d.data}/>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

