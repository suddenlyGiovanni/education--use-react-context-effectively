import React, { useCallback, useMemo } from 'react'
import { useCountDispatch } from '../count-context/count-context'

export function CounterControls(): JSX.Element {
  const dispatch = useCountDispatch()

  const onIncrement = useCallback(() => dispatch({ type: 'increment' }), [
    dispatch,
  ])

  const onDecrement = useCallback(() => dispatch({ type: 'decrement' }), [
    dispatch,
  ])

  const onReset = useCallback(() => dispatch({ type: 'reset' }), [dispatch])

  return useMemo(() => {
    return (
      <div>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
      </div>
    )
  }, [onIncrement, onDecrement, onReset])
}
