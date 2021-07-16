import styled from "styled-components";
import IconSpade from '../../components/IconSpade'

export const CardPointStyle = styled.article`
  width: 60px;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > ${IconSpade} {
    width: 10px;
    height: auto;
  }

  & > ${IconSpade}:first-child {
    align-self: flex-start
  }

  & > ${IconSpade}:last-child {
    align-self: flex-end
  }
`

export const TextScore = styled.p`
  font-size: 16px;
`