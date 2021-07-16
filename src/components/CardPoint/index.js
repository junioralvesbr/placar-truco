import { CardPointStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'
import IconHeart from '../IconHeart'

const naip = [];

function CardPoint({ point, card }) {
  naip['spade'] = <IconSpade />
  naip['heart'] = <IconHeart />

  return (
    <CardPointStyle card={card}>
      {naip[card]}
      <TextScore>+{point}</TextScore>
      {naip[card]}
    </CardPointStyle>
  )
}

export default CardPoint