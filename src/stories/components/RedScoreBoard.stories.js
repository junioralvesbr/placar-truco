import RedScoreBoard from "../../components/RedScoreBoard";

export default {
  title: 'Components/RedScoreBoard',
  component: RedScoreBoard,
  parameters: {
    layout: 'centered'
  }
}

const Template = () => <RedScoreBoard />

export const Default = Template.bind({})