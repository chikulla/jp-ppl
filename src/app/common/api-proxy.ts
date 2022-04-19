export interface RESASResult<R> {
  message?: string,
  result: R,
}

export function key(): string {
  const key = process.env.REACT_APP_RESAS_APIKEY
  if (!key) {
    throw new Error('Unexpected error: API KEY NOT DEFINED')
  }
  return key
}

export async function get<T>(url: string): Promise<RESASResult<T>> {
  const r = await fetch(url, {
    headers: {
      'X-API-KEY': key(),
    },
  })
  return r.json()
}
