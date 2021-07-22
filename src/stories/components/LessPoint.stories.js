import LessPoint from '../../components/LessPoint'

export default {
  title: 'Components/LessPoint',
  component: LessPoint,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <LessPoint {...args}>-1</LessPoint>

export const Spade = Template.bind({})
Spade.args = {
  card: 'spade'
}

export const Heart = Template.bind({})
Heart.args = {
  card: 'heart'
}