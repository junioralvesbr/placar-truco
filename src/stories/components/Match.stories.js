import Match from "../../components/Match";

export default {
  title: 'Components/Match',
  component: Match,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <Match>{args.score}</Match>

export const Default = Template.bind({})
Default.args = {
  score: 0
}