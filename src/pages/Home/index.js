import BlackScoreBoard from '../../components/BlackScoreBoard'
import RedScoreBoard from '../../components/RedScoreBoard'
import CardPoint from '../../components/CardPoint'
import LessPoint from '../../components/LessPoint'

import { Main, Content, BoardSection, PointSection, CardPointStyle } from './styles'

function Home() {
  return (
    <Main>
      <Content>

        <BoardSection>
          <BlackScoreBoard />
          <RedScoreBoard />
        </BoardSection>

        <PointSection>

          <CardPointStyle>
            <LessPoint card="spade">-1</LessPoint>
            <CardPoint point="1" card="spade" />
            <CardPoint point="3" card="spade" />
            <CardPoint point="6" card="spade" />
            <CardPoint point="9" card="spade" />
          </CardPointStyle>

          <CardPointStyle>
            <LessPoint>-1</LessPoint>
            <CardPoint point="1" card="heart" />
            <CardPoint point="3" card="heart" />
            <CardPoint point="6" card="heart" />
            <CardPoint point="9" card="heart" />
          </CardPointStyle>

        </PointSection>

      </Content>
    </Main>
  )
}

export default Home