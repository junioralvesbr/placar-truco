import { useState } from 'react'
import { Main, Container, BoardSection, PointSection, CardPointStyle, MatchWrapper } from './styles'
import ResetGame from '../../components/ResetGame'
import ScoreBoard from '../../components/ScoreBoard'
import CardPoint from '../../components/CardPoint'
import LessPoint from '../../components/LessPoint'
import Match from '../../components/Match'

function Home() {
  const [spadeScore, setSpadeScore] = useState(0)
  const [heartScore, setHeartScore] = useState(0)
  const [spadeMatch, setSpadeMatch] = useState(0)
  const [heartMatch, setHeartMatch] = useState(0)

  const upSpadeScore = (point) => {
    let totalScore = spadeScore + point
    if (totalScore >= 12) {
      setSpadeScore(0)
      setHeartScore(0)
      setSpadeMatch(old => old + 1)
      return
    }
    setSpadeScore(totalScore)
  }

  const downSpadeScore = () => {
    spadeScore > 0 && setSpadeScore(spadeScore - 1)
  }

  const upHeartScore = (point) => {
    let totalScore = heartScore + point
    if (totalScore >= 12) {
      setSpadeScore(0)
      setHeartScore(0)
      setHeartMatch(old => old + 1)
      return
    }
    setHeartScore(totalScore)
  }

  const downHeartScore = () => {
    heartScore > 0 && setHeartScore(heartScore - 1)
  }

  const resetGame = () => {
    setSpadeScore(0)
    setHeartScore(0)
    setSpadeMatch(0)
    setHeartMatch(0)
  }

  return (
    <Main>
      <Container>

        <BoardSection>
          <ScoreBoard title="NÓS" card="spade" score={spadeScore} />
          <ScoreBoard title="ELES" card="heart" score={heartScore} />
        </BoardSection>

        <PointSection>

          <CardPointStyle>
            <LessPoint card="spade" onClick={downSpadeScore}>-1</LessPoint>
            <CardPoint point="1" card="spade" onClick={() => upSpadeScore(1)} />
            <CardPoint point="3" card="spade" onClick={() => upSpadeScore(3)} />
            <CardPoint point="6" card="spade" onClick={() => upSpadeScore(6)} />
            <CardPoint point="9" card="spade" onClick={() => upSpadeScore(9)} />
          </CardPointStyle>

          <CardPointStyle>
            <LessPoint onClick={downHeartScore}>-1</LessPoint>
            <CardPoint point="1" card="heart" onClick={() => upHeartScore(1)} />
            <CardPoint point="3" card="heart" onClick={() => upHeartScore(3)} />
            <CardPoint point="6" card="heart" onClick={() => upHeartScore(6)} />
            <CardPoint point="9" card="heart" onClick={() => upHeartScore(9)} />
          </CardPointStyle>

        </PointSection>

        <MatchWrapper>
          <Match>{spadeMatch}</Match>
          <Match>{heartMatch}</Match>
        </MatchWrapper>

        <ResetGame onClick={resetGame}>Reiniciar</ResetGame>
      </Container>
    </Main>
  )
}

export default Home