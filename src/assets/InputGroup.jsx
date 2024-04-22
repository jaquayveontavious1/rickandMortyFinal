import React from 'react'

const InputGroup = ({total, name, setId}) => {
    console.log(...Array(total).keys())
  return (
    <div>
      
     
        <select onChange={(e)=> setId(e.target.value)} id={name} name="episodes" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 w-48  pr-7text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                <option>Choose</option>
                {[...Array(total).keys()].map((x)=> {
                    return <option value={x + 1} >{name} - {x + 1}</option>

                    
                })}
               
        </select>
    </div>
  )
}

export default InputGroup;