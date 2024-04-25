import React from "react";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


const CardDetails = () => {
    let {id} = useParams()

    const api  = `https://rickandmortyapi.com/api/character/${id}`

    const [fetchedData,setfetchedData] = useState([])
     
    const {name, image,status,gender,species,type,location,created,origin} = fetchedData;


    useEffect(() => {
        (async function () {
            const response = await fetch(api);
            const data = await response.json()
            console.log(data)
            setfetchedData(data)
        })();
    },[api])


    return (
        <>
            <div className="content-center justify-items-center text-center">
                <div>
                    <h2 className='text-2xl text-blue-800 mb-4' >{name}</h2>
                </div>
                <div className="image-of-character  ">
                    <img src={image} alt={name} />
                </div>
                <div className="status ">
                    {
                        (() => {
                            if(status === "Dead") {
                                return (
                                    <div>
                                        <span className="bg-red-900 text-white px-2 py-1 rounded ">{status}</span>
                                    </div>
                                )
                            } else if (status === "Alive") {
                                return (
                                    <div>
                                        <span className="bg-green-900 text-white">{status}</span>
                                    </div>
                                )
                            } else if (status === "Unknown") {
                                return (
                                    <div>
                                        <span className="bg-gray-900 text-white">{status}</span>
                                    </div>
                                )
                            }
                        }) ()
                    }

                </div>
                <div className="gender-of-character">
                    <span>
                        Gender : {gender}
                    </span>

                </div>
                <div className="species-of-character">
                    <span>
                        Species : {species}
                    </span>

                </div>
                <div className="type-of-character">
                    <span>
                        Type : {type === '' ? "Unknown" : type}
                    </span>

               
                </div>
                <div className="location-of-character">
                    <span>
                        Residence : {location ? "Unknown" : name}
                    </span>
                  

                </div>
                <div className="origin-of-character">
                    <span>
                        Origin : {origin ? "Unknown" : name}
                    </span>

                </div>
                <div className="time-character-created">
                    <span>
                        Time created : {created}
                    </span>
                </div>
              
              
            </div>
        </>
    )
}
export default CardDetails;