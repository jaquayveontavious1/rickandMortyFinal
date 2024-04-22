import React from 'react'

const Search = ({ setSearch}) => {
let searchBtn = (event) => {
    event.preventDefault();
    console.log("Clicked")
};
  return (
    <div>
        <form className='ml-96'>
            <input type="text" onChange={(event) => {
                
                setSearch(event.target.value)
                console.log(setSearch)
            }} placeholder='Search for Characters' className='w-96 h-8'/>
            <button onClick={searchBtn} className='bg-blutext-white e-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 mb-3.5 
            focus:outline-none dark:focus:ring-blue-800 ml-2.5'>Search</button>
        </form>

    </div>
  )
}

export default Search;