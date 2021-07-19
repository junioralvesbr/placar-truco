import { Container, Title, ScoreBoardStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'
import IconHeart from '../IconHeart'

const naip = []

function ScoreBoard({ title, card, score }) {
  naip['spade'] = <IconSpade />
  naip['heart'] = <IconHeart />

  return (
    <Container>
      <Title>{title}</Title>
      <ScoreBoardStyle>
        {naip[card]}
        <TextScore naip={card}>{score}</TextScore>
        {naip[card]}
      </ScoreBoardStyle>
    </Container>
  )
}

export default ScoreBoard