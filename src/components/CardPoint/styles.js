import styled from "styled-components";
import IconSpade from '../../components/IconSpade'
import IconHeart from '../../components/IconHeart'

export const CardPointStyle = styled.button`
  width: 60px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ card }) => card === "spade" ? '#000000' : '#FF0000'};
  cursor: pointer;

  & > ${IconSpade},
  & > ${IconHeart} {
  width: 10px;
  height: auto;
}

  & > ${IconSpade}:first-child {
    align-self: flex-start;
  }

  & > ${IconSpade}:last-child {
    align-self: flex-end;
  }

  & > ${IconHeart}:first-child {
    align-self: flex-start;
  }

  & > ${IconHeart}:last-child {
   align-self: flex-end;
  }
`

export const TextScore = styled.p`
  font-size: 16px;
`