import { useEffect, useMemo, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

function usePagination({ totalItems = 0, itemsPerPage = 10, initialPage = 1 } = {}) {
  const safeItemsPerPage = Math.max(1, itemsPerPage)
  const safeTotalItems = Math.max(0, totalItems)

  const totalPages = useMemo(() => {
    const pages = Math.ceil(safeTotalItems / safeItemsPerPage)
    return Math.max(1, pages)
  }, [safeItemsPerPage, safeTotalItems])

  const [currentPage, setCurrentPage] = useState(() => clamp(initialPage, 1, totalPages))

  useEffect(() => {
    setCurrentPage((prev) => clamp(prev, 1, totalPages))
  }, [totalPages])

  const startIndex = (currentPage - 1) * safeItemsPerPage
  const lastIndex = startIndex + safeItemsPerPage - 1
  const endIndex = safeTotalItems === 0 ? -1 : Math.min(lastIndex, safeTotalItems - 1)
  const itemsOnCurrentPage = safeTotalItems === 0 ? 0 : Math.min(safeItemsPerPage, safeTotalItems - startIndex)

  const setPage = (pageNumber) => setCurrentPage(clamp(pageNumber, 1, totalPages))
  const nextPage = () => setCurrentPage((prev) => clamp(prev + 1, 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => clamp(prev - 1, 1, totalPages))

  const canNextPage = currentPage < totalPages
  const canPrevPage = currentPage > 1

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  }
}

export default usePagination
