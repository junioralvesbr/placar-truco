import BlackScoreBoard from '../../components/BlackScoreBoard'

export default {
  title: 'Components/BlackScoreBoard',
  component: BlackScoreBoard,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <BlackScoreBoard {...args} />

export const Default = Template.bind({})
Default.args = {
  spadeScore: 0
}