import RedScoreBoardStyle from "./styles"
import IconHeart from '../IconHeart'
import TextScore from '../TextScore'

function RedScoreBoard({ heartScore }) {
  return (
    <RedScoreBoardStyle>
      <IconHeart />
      <TextScore>{heartScore}</TextScore>
      <IconHeart />
    </RedScoreBoardStyle>
  )
}

export default RedScoreBoard