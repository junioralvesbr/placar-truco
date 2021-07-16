import BlackScoreBoard from '../../components/BlackScoreBoard'
import RedScoreBoard from '../../components/RedScoreBoard'

import { Main, Content, BoardSection } from './styles'

function Home() {
  return (
    <Main>
      <Content>
        <BoardSection>
          <BlackScoreBoard />
          <RedScoreBoard />
        </BoardSection>
      </Content>
    </Main>
  )
}

export default Home