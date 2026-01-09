import { useEffect, useMemo, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const SAMPLE_DATA = [
  'Apple',
  'Apricot',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Cherry',
  'Clementine',
  'Grapefruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Raspberry',
  'Strawberry',
  'Watermelon',
]

function DebounceSearchDemo() {
  const [query, setQuery] = useState('')
  const [delay, setDelay] = useState(500)
  const debouncedQuery = useDebounce(query, delay)

  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Searching for: ${debouncedQuery}`)
    }
  }, [debouncedQuery])

  const results = useMemo(() => {
    const lowered = debouncedQuery.toLowerCase()
    return SAMPLE_DATA.filter((item) => item.toLowerCase().includes(lowered))
  }, [debouncedQuery])

  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Debounce Search Demo</p>
          <h2>Debounce Delay (ms)</h2>
          <p className="hint">Adjust to see how the debounced value lags behind typing.</p>
        </div>
        <input
          type="number"
          min="100"
          step="100"
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value) || 0)}
          className="number-input"
        />
      </header>

      <div className="stack">
        <label className="field">
          <span className="field__label">Type to search...</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g., mango"
          />
        </label>

        <div className="pill-group">
          <div className="pill">Current Input: {query || '—'}</div>
          <div className="pill pill--accent">Debounced Value: {debouncedQuery || '—'}</div>
        </div>

        <div className="results">
          <p className="eyebrow">Simulated Search Results</p>
          {debouncedQuery ? (
            <ul>
              {results.length === 0 && <li className="muted">No matches.</li>}
              {results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="muted">Type to see results.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default DebounceSearchDemo
