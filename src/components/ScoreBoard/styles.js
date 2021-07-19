import styled from 'styled-components'
import IconHeart from '../IconHeart'
import IconSpade from '../IconSpade'

export const Container = styled.div``

export const Title = styled.h1`
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;
`

export const ScoreBoardStyle = styled.article`
  width: 150px;
  height: 240px;
  background-color: #ffffff;
  filter: drop-shadow(2px 4px 6px #000000);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;

  & > ${IconSpade}:first-child {
    align-self: flex-start;
  }
  
  & > ${IconHeart}:first-Child {
    align-self: flex-start;
  }

  & > ${IconSpade}:last-child {
    align-self: flex-end;
  }

  & > ${IconHeart}:last-child {
    align-self: flex-end;
  }
`

export const TextScore = styled.p`
  font-size: 80px;
  color: ${({ naip }) => naip === 'spade' ? '#000000' : '#ff0000'}
`