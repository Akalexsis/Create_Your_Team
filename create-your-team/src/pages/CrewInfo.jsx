import React from "react";
import supabase from "../Client";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CrewInfo =  () => {
    // select unique ID from URL
    const { crewID } = useParams()

    // stores info on the crewmate
    const [ info, setInfo ] = useState([])

     // api call to get selected crewmate from database
     const getCrewmate = async () => {
        // get crewmate by id from database 
        const { data, error } = await supabase.from('CrewMates').select().eq('id', crewID)
        setInfo(data)
    }
    // make only one api call to get crewmate
    useEffect(() => {getCrewmate()}, [])
    console.log(info)

    return(
        <div className="crew-info-container">
            <Link to='/gallery'> Back </Link>
            <div className="crew-info">
                <h1>{info[0]?.name}</h1>
                <p> {info[0]?.name} was created on {info[0]?.created_at}. This avatar is {info[0]?.color} and stands at an incredible {info[0]?.height} feet tall. </p>
            </div>
            
        </div>
    )
}

export default CrewInfo;