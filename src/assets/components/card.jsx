import React from 'react'
import { Link } from 'react-router-dom';

import './card.css'

const Card = ({results , page}) => {
    let display;
   console.log(results)
    if(results) {
        display = results.map((x) => {
            let {id, image , name , location, status } = x;
            return (
            <>
                <Link to={`${page}${id}`} key={id}  className='column-4 position-relative' >
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt={name} />

                        </div>
                        <div className='content'>
                            <div className='font-bold text-xl mb-1.5'>
                                {name}
                            </div>
                            <div>
                                <h4 className='text-lg'>Last Location : </h4>
                                <p>{location.name}</p>
                            </div>
                            <div className='status'>
                              {
                                (()=> {
                                    if(status === "Dead") {
                                        return (
                                            <div>
                                                <span className="bg-red-100 text-red-800 ml-60  text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{status}</span>

                                            </div>
                                        );
                                    } else if (status === "Alive") {
                                        return (
                                            <div>
                                                <span className="bg-green-100  ml-60 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{status}</span>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div>
                                                <span className="bg-gray-100 ml-52 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{status}</span>
                                            </div>
                                        );
                                    }
                                }) ()
                             }

                            </div>

                        </div>

                    </div>
                </Link>

                        
                       
                        

                    
            </>
            )
           
                
             
            
        })
    }
    else {
         display = "No Character Found"
    }
  
    return (
        <>
            
            
            <div>
            
                <div className='grid grid-cols-3 gap-4 p-4'>
                    {display}
                </div>
                    

            </div>
            
         
          
            
        
         
        </>
    )
} 
 

export default Card;