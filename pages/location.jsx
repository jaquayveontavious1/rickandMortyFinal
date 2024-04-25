import React from "react";
import {useState,useEffect} from 'react'
import Card from "../src/assets/components/card";
import { data } from "autoprefixer";
import InputGroupL from "./InputGroupL";

const Location = () => {
    const [id,setId] = useState(1);
    const [info,setInfo] = useState([]);
    const [results,setResults] = useState([]);
    let {name,type,dimension} = info;
    let api = `https://rickandmortyapi.com/api/location/${id}`;
    console.log(info)

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((response) => response.json())
            setInfo(data)
            let a = await Promise.all (
                data.residents.map( async(x) => {
                    return fetch(x).then((response) => response.json())
                })
            )
            setResults(a)
        })()


       
    }, [api])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="main">
                        <h3>Locations</h3>
                        <span className="text">
                            {name === "" ? "Unknown" : name}

                        </span>
                        <h4 className="text-center">Type : 
                            {type === "" ? "Unknown" : type }
                        </h4>
                        <h5>
                            {dimension === "" ? "Unknown" : dimension}
                        </h5>

                    </div>

                </div>
                <div className="row">
                    <div className="column-3">
                        <InputGroupL setId={setId} name="Locations" total={126} />

                    </div>
                    <div className="cards column-8">
                        <h3>
                            <Card results={results} page="/location" /> 
                        </h3>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Location;