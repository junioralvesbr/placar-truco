import { useState } from 'react'
import BlackScoreBoard from '../../components/BlackScoreBoard'
import RedScoreBoard from '../../components/RedScoreBoard'
import CardPoint from '../../components/CardPoint'
import LessPoint from '../../components/LessPoint'

import { Main, Content, BoardSection, PointSection, CardPointStyle } from './styles'

function Home() {
  const [spadeScore, setSpadeScore] = useState(0)
  const [heartScore, setHeartScore] = useState(0)

  const upScore = (point) => {
    let totalScore = spadeScore + point
    totalScore >= 12 ? setSpadeScore(12) : setSpadeScore(totalScore)
  }

  const downScore = () => {
    spadeScore > 0 && setSpadeScore(spadeScore - 1)
  }

  const upHeartScore = (point) => {
    let totalScore = heartScore + point
    totalScore >= 12 ? setHeartScore(12) : setHeartScore(totalScore)
  }

  const downHeartScore = () => {
    heartScore > 0 && setHeartScore(heartScore - 1)
  }

  return (
    <Main>
      <Content>

        <BoardSection>
          <BlackScoreBoard spadeScore={spadeScore} />
          <RedScoreBoard heartScore={heartScore} />
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
            <LessPoint onClick={downHeartScore}>-1</LessPoint>
            <CardPoint point="1" card="heart" onClick={() => upHeartScore(1)} />
            <CardPoint point="3" card="heart" onClick={() => upHeartScore(3)} />
            <CardPoint point="6" card="heart" onClick={() => upHeartScore(6)} />
            <CardPoint point="9" card="heart" onClick={() => upHeartScore(9)} />
          </CardPointStyle>

        </PointSection>

      </Content>
    </Main>
  )
}

export default Home