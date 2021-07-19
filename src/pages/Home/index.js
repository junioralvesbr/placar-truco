import { useState } from 'react'
import BlackScoreBoard from '../../components/BlackScoreBoard'
import RedScoreBoard from '../../components/RedScoreBoard'
import CardPoint from '../../components/CardPoint'
import LessPoint from '../../components/LessPoint'

import { Main, Content, BoardSection, PointSection, CardPointStyle } from './styles'

function Home() {
  const [spadeScore, setSpadeScore] = useState(0)

  const upScore = (point) => {
    let totalScore = spadeScore + point
    totalScore >= 12 ? setSpadeScore(12) : setSpadeScore(totalScore)
  }

  const downScore = () => {
    spadeScore > 0 && setSpadeScore(spadeScore - 1)
  }

  return (
    <Main>
      <Content>

        <BoardSection>
          <BlackScoreBoard spadeScore={spadeScore} />
          <RedScoreBoard />
        </BoardSection>

        <PointSection>

          <CardPointStyle>
            <LessPoint card="spade" onClick={downScore}>-1</LessPoint>
            <CardPoint point="1" card="spade" onClick={() => upScore(1)} />
            <CardPoint point="3" card="spade" onClick={() => upScore(3)} />
            <CardPoint point="6" card="spade" onClick={() => upScore(6)} />
            <CardPoint point="9" card="spade" onClick={() => upScore(9)} />
          </CardPointStyle>

          <CardPointStyle>
            <LessPoint>-1</LessPoint>
            <CardPoint point="1" card="heart" />
            <CardPoint point="3" card="heart" />
            <CardPoint point="6" card="heart" />
            <CardPoint point="9" card="heart" />
          </CardPointStyle>

        </PointSection>

      </Content>
    </Main>
  )
}

export default Home