import React, { Component } from 'react'
import { PageWrap, TitleWrap, CD, FullStack, ArrESE, Arrow, ESE, CandleImg } from '../styles/allStyles'
import arrow from './code-pics/arrow.png'

 class FrontCover extends Component {
  render() {
    return (
      <>
        <PageWrap>
            <TitleWrap>
              <CD>
                Colton Davis
              </CD>
              <FullStack>
                Full Stack Web Developer
              </FullStack>
            </TitleWrap>
              <Arrow src={arrow} />
        </PageWrap>
      </>
    )
  }
}

export default FrontCover