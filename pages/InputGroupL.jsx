import React from 'react'

const InputGroupL = ({setId, name , total}) => {

  return (
    <div>
        <select onChange={(e)=> setId(e.target.value)} id={name} name='location' className='h-full rounded-md border-0 bg-transparent py-0 pl-2 w-48 pr-7 text-gray-500 focus:ring-inset focus:ring-indigo-600 sm:text-sm'>
            <option >Choose</option>
          {Array.from({length : total}, (_,index) => (
           
                <option key={index + 1} value={index + 1}> Location -
                {index + 1}
            </option>
         
         
        
          ))}
        </select>
    </div>
  )
}

export default InputGroupL;