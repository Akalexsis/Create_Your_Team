import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";

const Create = () => {
    // stores all the user input
    const [ userInput , setUserInput ] = useState(
        {
            name: '',
            height: 0,
            color: ''
        } );

    // stores user input for POST request
    const handleUserInput = (e) => {
        // takes all prev values of userInput and creates new obj w key=[e.target.name] and value
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    console.log(userInput)

    const onCreate = async (e) => {
        e.preventDefault()

        // add new crewmate to database
        const { data, error } = await supabase.from('CrewMates').insert([{name: userInput.name, height: userInput.height, color: userInput.color}]).select();
        console.log(data)
        // clear form
        setUserInput({ name: '', height: 0, color: '' })
    }

    return(
        <div>
            <form className="new-crew">
                <label htmlFor="name">Name: </label>
                <input placeholder="name" type="text" name="name" value={userInput.name} onChange={handleUserInput} />
                <label htmlFor="height">Height (in ft): </label>
                <input type="number" name="height" min='0' max='10' value={userInput.height} onChange={handleUserInput} />
                <label htmlFor="color">Color: </label>
                <input placeholder="color" type="text" name="color" value={userInput.color} onChange={handleUserInput} />
                <button type="submit" onClick={onCreate}> Create! </button>
            </form>
        </div>
    )
}

export default Create;