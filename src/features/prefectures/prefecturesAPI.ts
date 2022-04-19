import { get, RESASResult } from '../../app/common/api-proxy'
import { Prefecture } from './prefecturesSlice'

export const URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'

export async function fetchPrefectures(): Promise<RESASResult<Prefecture[]>> {
  return get(URL);
}
