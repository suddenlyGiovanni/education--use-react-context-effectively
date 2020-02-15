import React, { useMemo } from 'react'
import { useCountState } from '../count-context/count-context'
export function CountDisplay(): JSX.Element {
  const { count } = useCountState()
  return useMemo(() => <div>{count}</div>, [count])
}
