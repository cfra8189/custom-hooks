import { useMemo } from 'react'
import usePagination from '../hooks/usePagination'

const TOTAL_ITEMS = 123
const ITEMS_PER_PAGE = 10

function PaginationDemo() {
  const items = useMemo(
    () => Array.from({ length: TOTAL_ITEMS }, (_, index) => `Item ${index + 1}`),
    [],
  )

  const pagination = usePagination({
    totalItems: items.length,
    itemsPerPage: ITEMS_PER_PAGE,
    initialPage: 1,
  })

  const { startIndex, endIndex } = pagination
  const pageItems = items.slice(startIndex, endIndex + 1)

  return (
    <section className="panel">
      <header className="panel__header">
        <div>
          <p className="eyebrow">Pagination Demo</p>
          <h2>Items per page: {ITEMS_PER_PAGE}</h2>
          <p>Total Items: {items.length}</p>
        </div>
        <div className="pill">Page {pagination.currentPage} of {pagination.totalPages}</div>
      </header>

      <ul className="item-grid" aria-live="polite">
        {pageItems.map((item) => (
          <li key={item} className="item-card">
            {item}
          </li>
        ))}
      </ul>

      <div className="controls">
        <button onClick={pagination.prevPage} disabled={!pagination.canPrevPage}>
          Previous
        </button>
        <div className="page-buttons" aria-label="Jump to page">
          {Array.from({ length: pagination.totalPages }, (_, index) => {
            const pageNumber = index + 1
            const isActive = pageNumber === pagination.currentPage
            return (
              <button
                key={pageNumber}
                onClick={() => pagination.setPage(pageNumber)}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            )
          })}
        </div>
        <button onClick={pagination.nextPage} disabled={!pagination.canNextPage}>
          Next
        </button>
      </div>

      <p className="meta">
        Showing items {pagination.startIndex + 1} - {pagination.endIndex + 1} (Total on this page: {pagination.itemsOnCurrentPage})
      </p>
    </section>
  )
}

export default PaginationDemo
