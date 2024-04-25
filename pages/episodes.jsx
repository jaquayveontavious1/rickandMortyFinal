import React, { useState } from 'react'
import { useEffect } from 'react'
import 'tailwindcss/tailwind.css';
import Card from '../src/assets/components/card';
import InputGroup from '../src/assets/InputGroup';



const Episodes = () => {
  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  let api = `https://rickandmortyapi.com/api/episode/${id}`
  let {name, episode, air_date} = info;
  const [results, setResults] =  useState([])
  
  console.log(info)
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json())
      setInfo(data)

      let a =  await Promise.all(
        data.characters.map(async(x) => {
          return fetch(x).then((response) => response.json())



          
        })
      )
      setResults(a)
    })();
  }, [api])
  return (
    <div className='container'>
      <div className='row'>
                <div className="main">
                  <h2 className='episode mb-2'>Episode :
                    <span className='text'>
                      {name === "" ? "Unknown" : name}
                    </span>
                  </h2>
                  <h5 className='text-center '>Air Date : {air_date === "" ? "Unknown" : air_date}</h5>
                </div>
      </div>
      <div className='row'>
        <div className='episodes column-3'>
          <InputGroup setId={setId}  name= 'Episode' total={51}/>
        </div>
        <div className='cards column-8'>
          <h3>
            <Card page="/episodes/" results={results}/>
          </h3>
        </div>
        

      </div>

       

    </div>
  )
}

export default Episodes;