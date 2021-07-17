import { CardPointStyle, TextScore } from './styles'
import IconSpade from '../IconSpade'
import IconHeart from '../IconHeart'

const naip = [];

function CardPoint({ point, card, onClick }) {
  naip['spade'] = <IconSpade />
  naip['heart'] = <IconHeart />

  return (
    <CardPointStyle card={card} onClick={onClick}>
      {naip[card]}
      <TextScore>+{point}</TextScore>
      {naip[card]}
    </CardPointStyle>
  )
}

export default CardPoint