import React from "react";
import supabase from "../Client";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const DeleteCrew = () => {
    return(
        <div className="delete">
            <Link to='/gallery'> Back </Link>
            Delete
        </div>
    )
}

export default DeleteCrew;