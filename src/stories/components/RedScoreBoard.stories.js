import RedScoreBoard from "../../components/RedScoreBoard";

export default {
  title: 'Components/RedScoreBoard',
  component: RedScoreBoard,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <RedScoreBoard {...args} />

export const Default = Template.bind({})
Default.args = {
  heartScore: 0
}