import React from 'react'
import { Page2Wrap, H2, Experience, ExParagraph, ExImg, ExImgWrap, Skills, SkillList, Skill, CodeImg, } from '../styles/allStyles'
import css from './code-pics/css.png'
import command from './code-pics/command.png'
import es6 from './code-pics/es6.png'
import git from './code-pics/git.png'
import html from './code-pics/html.png'
import react from './code-pics/react.png'
import ruby from './code-pics/ruby.png'
import sbm from './code-pics/sbm.png'
import sql from './code-pics/sql.png'
import dpl from './code-pics/dpl.png'
import uou from './code-pics/uou.png'

const ExperienceSkills = () => {
  return (
    <>
      <Page2Wrap>
        <Experience>
        <H2>Experience</H2>
          <ExParagraph>
            I've obtained various sets of skills, while building Ruby on Rails and ReactJS apps from the bottom up. Doing so while recieving my education from the University of Utah, Professional Education, and Devpoint Labs Course.
          </ExParagraph>
          <H2>Education</H2>
            <ExImgWrap>
              <ExImg src={uou} />
              <ExImg src={dpl} />
            </ExImgWrap>
        </Experience>

        <Skills>
          <H2>Skills</H2>
          <SkillList>
            <Skill>
              <CodeImg src={es6}/>
              Javascript/ES6
            </Skill>
            <Skill>
              <CodeImg src={ruby}/>
              Ruby/Ruby on Rails
            </Skill>
            <Skill>
              <CodeImg src={react}/>
              React/Context Api/Redux
            </Skill>
            <Skill>
              <CodeImg src={css}/>
              HTML/CSS
            </Skill>
            <Skill>
              <CodeImg src={sql}/>
              Postgres/SQL
            </Skill>
            <Skill>
              <CodeImg src={git}/>
              Git/Github/Heroku
            </Skill>
            <Skill>
              <CodeImg src={command}/>
              Command Line
            </Skill>
            <Skill>
              <CodeImg src={sbm}/>
              · Semantic-Ui<br/>· Bootstrap<br/>· Materalize
            </Skill>
          </SkillList>
        </Skills>
      </Page2Wrap>
    </>
  )
}

export default ExperienceSkills
