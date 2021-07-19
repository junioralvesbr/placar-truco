import { ScoreBoardStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'
import IconHeart from '../IconHeart'

const naip = []

function ScoreBoard({ card, score }) {
  naip['spade'] = <IconSpade />
  naip['heart'] = <IconHeart />

  return (
    <ScoreBoardStyle>
      {naip[card]}
      <TextScore naip={card}>{score}</TextScore>
      {naip[card]}
    </ScoreBoardStyle>
  )
}

export default ScoreBoard