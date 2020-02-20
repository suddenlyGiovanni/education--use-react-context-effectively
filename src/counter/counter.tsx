import React, { useCallback, useMemo } from 'react'
import { useCountDispatch } from '../count-context/count-context'
import { useRenderCount } from '../render-count/render-count'

import './counter.css'

export function CounterControls(): JSX.Element {
  const dispatch = useCountDispatch()
  const renderCount = useRenderCount()

  const onIncrement = useCallback(() => dispatch({ type: 'increment' }), [
    dispatch,
  ])

  const onDecrement = useCallback(() => dispatch({ type: 'decrement' }), [
    dispatch,
  ])

  const onReset = useCallback(() => dispatch({ type: 'reset' }), [dispatch])

  return useMemo(() => {
    return (
      <div className="CounterControls">
        renders: {renderCount}
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
      </div>
    )
  }, [renderCount, onIncrement, onDecrement, onReset])
}
