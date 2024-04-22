import React from 'react'
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Card from '../src/assets/components/card';

import { data } from 'autoprefixer';
import InputGroupL from './InputGroupL';


const Location = () => {
  const [number,setNumber] = useState(1)
  let api = `https://rickandmortyapi.com/api/location/${number}`
  const [info,setInfo] = useState([])
  
  const [results,setResults] = useState([])
  let {name,dimension, type} = info;
  console.log(info)
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json())
      
      setInfo(data)


      let j = await Promise.all(
        data.residents.map(async(k) => {
          return fetch(k).then((response) => response.json())
        })
      )
      setResults(j)
    })();
  },[api])
  return (
    <div className='container'>
      <div className='row'>
        <div className='main'>
          <h2 className='mb-2'>Location : 
            <span className='text'>
              {name === "" ? 'Unknown' : name}
            
            </span>
          </h2>
          <h4 className='text-center'>Dimension : 
          {dimension === "" ? "Unknown" : dimension}</h4>
          <h5 className='text-center'>Type : 
          {type === "" ? "Unknown" : type}</h5>

        </div>

      </div>
      <div className='row'>
        <div className='column-3'>
          <InputGroupL setNumber={setNumber}name = 'Location' total={126}/>
          

        </div>
        <div className='cards column-8'>
          <h3>
            <Card results={results} />
          </h3>

        </div>

      </div>
    </div>
  )
}

export default Location;