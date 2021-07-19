import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  height: auto;
  max-height: 583px;
`

export const BoardSection = styled.section`
  display: flex;
  justify-content: space-around;
`

export const PointSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`

export const CardPointStyle = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`