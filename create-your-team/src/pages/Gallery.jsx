import React from "react";
import supabase from "../Client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Gallery = () => {
    // stores all crewmates
    const [ crewmates, setCrewmates ] = useState()

    // api call to get all crewmates from database
    const getCrewmates = async () => {
        // select all crewmates from database
        const { data, error } = await supabase.from('CrewMates').select().order('id', { ascending: false })
        // console.log(crewmate)
        setCrewmates(data)
    }
    
    // make only one api call to get all crewmates
    useEffect(() => {getCrewmates()}, [])
    console.log(crewmates)

    return(
        <div className="gallery">
            {/* for every crewmate, make a div element */}
            {crewmates && crewmates.map(( crewmate ) => 
            <div id={crewmate.id} className="crewmate">
                {/* navigates to info page with unique ID */}
                <Link to={`/info/${crewmate.id}`} className='info'> Info </Link>
                <h1>{crewmate.name}</h1>
                <h3> Height | {crewmate.height} ft </h3>
                <h5> Color | {crewmate.color}</h5>
                {/* navigates to info page with unique ID */}
                <Link to="/create" className="edit"> Edit </Link>
                {/* need to perform an action so button and not link */}
                <button> Delete </button>
            </div>
            )}
        </div>
    )
}

export default Gallery;