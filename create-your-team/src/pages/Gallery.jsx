import React from "react";
import supabase from "../Client";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Gallery = () => {
    // stores all crewmates
    const [ crewmates, setCrewmates ] = useState()

    // api call to get all crewmates from database
    const getCrewmates = async () => {
        // get all crewmates from database and order by most recent character
        const { data, error } = await supabase.from('CrewMates').select().order('id', { ascending: false })
        setCrewmates(data)
    }
    
    // make only one api call to get all crewmates
    useEffect(() => {getCrewmates()}, [])
    
    console.log(crewmates)

    const onDelete = async (id, name) => {
        console.log(name)
        // deletes selected crewmate
        const { data, error } = await supabase.from('CrewMates').delete().eq('id', id).select()
        console.log(data)

        // alerts user that their character has been deleted
        alert(`Avatar ${name} has been deleted`)
    }

    // deletes one crewmate
    // useEffect(() => {onDelete()}, [])

    return(
        <div className="gallery">
            {/* for every crewmate, make a div element */}
            {crewmates && crewmates.map(( crewmate ) => 
            <div id={crewmate.id} className="crewmate" key={crewmate.id}>
                <Link to={`/info/${crewmate.id}`} className='info'> Info </Link>
                <h1>{crewmate.name}</h1>
                <h3> Height | {crewmate.height} ft </h3>
                <h5> Color | {crewmate.color}</h5>
                {/* navigates to info page with unique ID */}
                <Link to={`/update/${crewmate.id}`} state={crewmate} className="edit"> Edit </Link>
                {/* must delete avatar with this specific id*/}
                <button onClick={() => onDelete(crewmate.id, crewmate.name)}> Delete </button>
            </div>
            )}
        </div>
    )
}

export default Gallery;