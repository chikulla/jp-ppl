import { CSSProperties, FC, Fragment } from 'react'
import { Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { PlotData } from './popCompositionSlice'

export const PopulationCompositionChart: FC<{ boundaryYear: number, data: PlotData[] }> = ({boundaryYear, data}) => {
  const withEstimate = convertToDataWithEstimate(boundaryYear, data)
  return (
    <ResponsiveContainer height={400}>
      <LineChart data={withEstimate} margin={{left: 15, right: 15, bottom: 20, top: 38}}>
        <XAxis dataKey="year" label={{value: '年', position: 'insideBottomCenter', dy: 20}}/>
        <YAxis tickFormatter={(n: number) => (n / 10000).toString()}
               label={{value: '人口(万人)', position: 'insideTopLeft', dy: -38, dx: 20}}/>
        <Tooltip content={genTooltipContent(boundaryYear) as any}/>
        <Line type="monotone" dataKey="value" stroke="black" isAnimationActive={false}/>
        <Line type="monotone" dataKey="estimate" stroke="grey" strokeDasharray={3} isAnimationActive={false}/>
        <ReferenceLine x={boundaryYear}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export interface EstimatePlotData {
  year: number
  value?: number
  estimate?: number
}

export function convertToDataWithEstimate(boundaryYear: number, data: PlotData[]): EstimatePlotData[] {
  const r: { year: number, value?: number, estimate?: number }[] = []
  data.forEach((d, i) => {
    if (data[i].year <= boundaryYear && data[i + 1]?.year > boundaryYear) {
      r.push({...d, estimate: d.value})
    } else if (d.year <= boundaryYear) {
      r.push(d)
    } else {
      r.push({year: d.year, estimate: d.value})
    }
  })
  return r
}

const sTooltipContent: CSSProperties = {
  background: 'rgba(0,0,0,0.1)',
  padding: '0rem 0.5rem',
}

const sP: CSSProperties = {
  margin: '0',
}

const genTooltipContent = (boundaryYear: number): FC<{ label: number, payload: { value?: number, estimate?: number }[] }> => ({label, payload}) => {
  if (payload.length === 0) {
    return <Fragment></Fragment>
  }
  const p = payload[0]
  const isEstimate = label > boundaryYear
  return (
    <div style={sTooltipContent}>
      <p style={sP}>
        {label}年
      </p>
      <p style={sP}>
        {isEstimate && '推測'} {p.value ?? '-'}人
      </p>
    </div>
  )
}
