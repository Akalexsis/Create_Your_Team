import React from "react";
import supabase from "../Client";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DeleteCrew = () => {
    // selects the avatar's unique  ID
    const { crewID } = useParams()
    console.log(crewID)

    return(
        <div className="delete">
            <Link to='/gallery'> Back </Link>
            Delete {crewID}
        </div>
    )
}

export default DeleteCrew;