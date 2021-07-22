import styled from 'styled-components'

const LessPoint = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ card }) => card === "spade" ? '#000000' : '#ff0000'};
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  
`

export default LessPoint