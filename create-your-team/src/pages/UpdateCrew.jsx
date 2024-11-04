import React from "react";
import supabase from "../Client";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const UpdateCrew = () => {
    // gets all the info from previous page
    const location = useLocation();
    console.log(location)

    //  store each piece of info in variables
    const { name, height, color, id } = location.state

    // default values all the user input
    const [ userInput , setUserInput ] = useState(
        {
            name: name,
            height: height,
            color: color
        } );

    // stores user input for UPDATE request
    const handleUserInput = (e) => {
        // takes all prev values of userInput and creates new obj w key=[e.target.name] and value
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    console.log(userInput)

    const onUpdate = async (e) => {
        e.preventDefault()

        // add new crewmate to database
        const { data, error } = await supabase.from('CrewMates').update([{name: userInput.name, height: userInput.height, color: userInput.color}]).
        eq('id', id).select();
        console.log(data)
        console.log(error)
        // clear form
        setUserInput({ name: '', height: 0, color: '' })
    }

    return(
        <div>
            <Link to='/gallery'> Back </Link>
            <form className="new-crew">
                <label htmlFor="name">Name: </label>
                <input placeholder="name" type="text" name="name" value={userInput.name} onChange={handleUserInput} />
                <label htmlFor="height">Height (in ft): </label>
                <input type="number" name="height" min='0' max='10' value={userInput.height} onChange={handleUserInput} />
                <label htmlFor="color">Color: </label>
                <input placeholder="color" type="text" name="color" value={userInput.color} onChange={handleUserInput} />
                <button type="submit" onClick={onUpdate}> Update! </button>
            </form>
        </div>
    )
}

export default UpdateCrew;