import React from "react";
import supabase from "../Client";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <h1> Welcome to Crew Creator! </h1> 
            <p> On this site, you can build your own customized character for any game of your choosing. You can name your
                avatars, set their heights, and determine their color. You can also view a gallary of all the characters
                you've previously created. To begin, click the 'New Crewmate' button to begin! </p>
            <Link className="create" to="/create"> New Crewmate </Link>
        </div>
    )
}

export default Home;