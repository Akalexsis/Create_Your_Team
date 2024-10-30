import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Create from './pages/Create';
import CrewInfo from './pages/CrewInfo';


function App() {

  const routes = [ 
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
    }
]
  return (
    <div className="App">
      Hello
      {routes}
    </div>
  )
}

export default App
