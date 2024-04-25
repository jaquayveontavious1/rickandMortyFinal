//imported documents
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {useEffect , useState} from 'react';
import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css'
import Card from './assets/components/card';
import Pagination from './assets/components/pagination';
import Search from './assets/components/search';
import Navbar from './assets/components/navbar';
import Episodes from '../pages/episodes';
import Location from '../pages/location';

import CardDetails from './assets/components/cardDetails';


function App () {
  return (
    <> 
        <div className='container mx-auto'>
          <Router >
            <div>
              <Navbar />
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element= {<CardDetails />} />

              <Route path='/episodes' element={<Episodes />} />
              <Route path='/episodes/:id' element= {<CardDetails />} />


              <Route path='/location' element={<Location />} />

              
             
            </Routes>
          </Router>
        </div>
    </>
  )
}

//function where initialization occurs
const Home = () =>  {
  const [pageNumber, setPageNumber] = useState(1) //pageNumber = 1, setPageNumber = function that will update the pageNumber
  
  const [fetchedData , setfetchedData] = useState ([]) //fetchedData = will be the array that we get from the API
  let {info , results} = fetchedData //destructured the fetched Data into info and results because that is what we are using
  const [search , setSearch] = useState("") //will be used in the search Component

//useEffect to fetch data from the Rick and Morty API
  useEffect(() => {
    const fetchData = async () => {
      const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}` //pageNumber & search are variables hence backticks were used
      const response = await fetch(api);
      const data = await response.json();
      setfetchedData(data) //setfetchedData will be updated using the data
      console.log(data)
    }
    fetchData() //function fetchData being called
  }, [pageNumber]) //pageNumber will be on watch
 
 
  

  
  

  //features that will be seen on the web

  return (
    <>
       <div>
       
        
        <div className='filter'>
            {/**Filter Component */} 
        </div>
        <div className='navbar'>
            {/**Navbar Component */}
        </div>
   
        <div>
          <h3 className='main-title'>Characters</h3>
          <Search setSearch = {setSearch} />
          
        </div>
        <div>
          {/**Card Component */}
          <Card page="/" results={results} />
          
        </div>
        <div>
          {/**Pagination Component */}
          <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber}/>
        </div>
       
       
       </div>
    </>
  )
   
}

export default App //imported to main.jsx
