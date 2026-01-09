import './App.css'
import DebounceSearchDemo from './components/DebounceSearchDemo'
import PaginationDemo from './components/PaginationDemo'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Custom Hooks Lab</p>
        <h1>usePagination + useDebounce</h1>
        <p className="muted">Reusable hooks with small demos to see them in action.</p>
      </header>

      <div className="grid">
        <PaginationDemo />
        <DebounceSearchDemo />
      </div>
    </main>
  )
}

export default App
