import React, { useMemo } from 'react'
import { useCountState } from '../count-context/count-context'
import { useRenderCount } from '../render-count/render-count'

import './count-display.css'

export function CountDisplay(): JSX.Element {
  const renderCount = useRenderCount()
  const { count } = useCountState()
  return useMemo(
    () => (
      <div className="CountDisplay">
        renders: {renderCount}
        The current count is <span className="CountDisplay-count">{count}</span>
      </div>
    ),
    [count, renderCount]
  )
}
