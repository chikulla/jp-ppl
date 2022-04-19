// spec: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html

import { get, RESASResult } from '../../app/common/api-proxy'
import { PopulationComposition } from './popCompositionSlice'

export function url(prefCode: number): string {
  return `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`
}

export async function fetchPopulationComposition(prefCode: number): Promise<RESASResult<PopulationComposition>> {
  return get(url(prefCode))
}
