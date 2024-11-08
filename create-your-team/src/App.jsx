import { useState } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Create from './pages/Create';
import CrewInfo from './pages/CrewInfo';
import DeleteCrew from './pages/DeleteCrew';
import UpdateCrew from './pages/UpdateCrew';

function App() {

  const routes = useRoutes([ 
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/gallery',
      element: <Gallery />
    },
    {
      path: '/create',
      element: <Create/>
    },
    {
      path: '/info/:crewID',
      element: <CrewInfo />
    },
    {
      path: '/delete/:crewID',
      element: <DeleteCrew />
    },
    {
      path: '/update/:crewID',
      element: <UpdateCrew/>
    }
]);
  return (
    <div className="App">
      {/* NAVIGATION BAR */}
      <nav>
        <div> 
          <h1> Create Your Crew </h1>
        </div>
        <div className='navigation'>
          <Link to='/'> Home </Link>
          <Link to='/gallery'> Crew Gallery </Link>
          {/* since creating, making new crewmate */}
          <Link to='/create'> New Crewmate </Link>
        </div>
      </nav>
      {/* where each component is displayed */}
      <div className="routes">
        {routes}
      </div>
    </div>
  )
}

export default App
