import React from 'react'
import FrontCover from './components/FrontCover'
import ExperienceSkills from './components/ExperienceSkills'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <div style={{margin: "0 auto"}}>
        <FrontCover />
        <ExperienceSkills />
        <Projects />
      </div>
    </>
  )
}

export default App
