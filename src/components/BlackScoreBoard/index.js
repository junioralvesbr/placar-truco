import BlackScoreBoardStyle from "./styles"
import IconSpade from '../IconSpade'
import TextScore from "../TextScore"

function BlackScoreBoard() {
  return (
    <BlackScoreBoardStyle>
      <IconSpade />
      <TextScore>11</TextScore>
      <IconSpade />
    </BlackScoreBoardStyle>
  )
}

export default BlackScoreBoard