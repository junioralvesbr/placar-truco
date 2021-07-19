import { ScoreBoardStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'
import IconHeart from '../IconHeart'

function ScoreBoard({ naip, score }) {
  return (
    <ScoreBoardStyle>
      {naip === 'spade' ? <IconSpade /> : <IconHeart />}
      <TextScore naip={naip}>{score}</TextScore>
      {naip === 'spade' ? <IconSpade /> : <IconHeart />}
    </ScoreBoardStyle>
  )
}

export default ScoreBoard