import styled from 'styled-components'
import IconHeart from '../../components/IconHeart'

const RedScoreBoardStyle = styled.article`
  width: 130px;
  height: 210px;
  background-color: #ffffff;
  filter: drop-shadow(2px 4px 6px #000000);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: red;

  & > ${IconHeart}:first-child {
    align-self: flex-start;
  }
  
  & > ${IconHeart}:last-child {
    align-self: flex-end;
  }
`

export default RedScoreBoardStyle