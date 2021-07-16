import RedScoreBoardStyle from "./styles"
import IconHeart from '../IconHeart'
import TextScore from '../TextScore'

function RedScoreBoard() {
  return (
    <RedScoreBoardStyle>
      <IconHeart />
      <TextScore>11</TextScore>
      <IconHeart />
    </RedScoreBoardStyle>
  )
}

export default RedScoreBoard