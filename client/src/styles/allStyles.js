import styled from 'styled-components'
import blackCandle from '../images/blackCandle.jpg'

// FRONT COVER 

export const PageWrap = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  max-width: 99%
  height: 100vh
  margin-bottom: 15%
`

export const TitleWrap = styled.div`
  text-align: center
  margin-top: 25%
  width: 85%

  @media(min-width: 1200px) {
    margin-top: 15%
  }
`
export const CD = styled.h1`
  font-size: 3rem
  border-bottom: 3px solid #eee
  max-width: 100%
  margin-bottom: 2%
`
export const FullStack = styled.p`
  font-size: 2rem
  margin-top: 2%
`
export const Arrow = styled.img`
  text-align: center
  width: 40px 
  height: 50px
`

// Experience/Education/Skills

export const Page2Wrap = styled.div`
  display: flex
  flex-direction: column
  max-width: 99%
  min-height: 100vh
  max-height: 100vh

  @media(min-width: 700px) {
    flex-direction: row
    min-height: 80vh
  max-height: 80vh
  }
`
export const H2 = styled.h2`
  font-size: 1.5rem
  margin-bottom: 2%
  border-bottom: 3px solid #eee
  width: 95%
`
export const Experience = styled.div`
  padding-left: 2%
  border-left: 3px solid #eee
`
export const ExParagraph = styled.p`
  font-size: 1.5rem
  width: 90%
  line-height: 1.6 
  padding-bottom: 5%
`
export const ExImgWrap = styled.div`
  display: flex
  align-items: center
`

export const ExImg = styled.img`
  width: 45%
  height: 45%

  @media (min-width: 480px) {
    max-width: 180px
    max-height: 180px
    margin-left: 5%
  }
  @media (min-width: 700px) {
  }
  @media (min-width: 1080px) {
    margin-left: 15%
  }
`

export const Skills = styled.div`
  padding-left: 2%
  border-left: 3px solid #eee
  width: 100%
  max-height: 75%
`
export const SkillList = styled.ul`
  display: flex
  flex-direction: column
  align-items: left
  justify-content: space-between
  font-size: 1.4rem
  list-style-type: none
  line-height: 1.7
`
export const Skill = styled.li`
  display: flex
  align-items: center
  border-bottom: 2px solid #414141
`
export const CodeImg = styled.img`
  width: 34px
  height: 36px
  margin-right: 5%
`


// Projects 

export const Page3Wrap = styled.div`
  display: flex
  flex-direction: column
  max-width: 99%
  min-height: 100vh
`

