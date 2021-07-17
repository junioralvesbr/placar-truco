import BlackScoreBoardStyle from "./styles"
import IconSpade from '../IconSpade'
import TextScore from "../TextScore"

function BlackScoreBoard({ spadeScore }) {
  return (
    <BlackScoreBoardStyle>
      <IconSpade />
      <TextScore>{spadeScore}</TextScore>
      <IconSpade />
    </BlackScoreBoardStyle>
  )
}

export default BlackScoreBoard