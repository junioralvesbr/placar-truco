import ScoreBoard from '../../components/ScoreBoard';

export default {
  title: 'Components/ScoreBoard',
  component: ScoreBoard,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <ScoreBoard {...args} />

export const Spade = Template.bind({})
Spade.args = {
  naip: 'spade',
  score: '0'
}

export const Heart = Template.bind({})
Heart.args = {
  naip: 'heart',
  score: '0'
}
