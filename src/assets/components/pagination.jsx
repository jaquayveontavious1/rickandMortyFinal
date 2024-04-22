import { data } from 'autoprefixer'
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info, setPageNumber, pageNumber}) => {
  console.log(info)
  return (
    <div>
      <ReactPaginate
      pageCount={info?.pages}
      nextLabel='Next'
      previousLabel = 'Prev'
      className='pagination gap-3 justify-center '
      nextClassName='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2'
      previousClassName='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2'
      onPageChange={(data) => {
        setPageNumber(data.selected + 1)
      }}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      
      />
    </div>
  )
}

export  default Pagination