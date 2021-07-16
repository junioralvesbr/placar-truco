import { CardPointStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'

function CardPoint() {
  return (
    <CardPointStyle>
      <IconSpade />
      <TextScore>+3</TextScore>
      <IconSpade />
    </CardPointStyle>
  )
}

export default CardPoint