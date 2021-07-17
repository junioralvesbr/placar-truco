import CardPoint from '../../components/CardPoint'

export default {
  title: 'Components/CardPoint',
  component: CardPoint,
  parameters: {
    layout: 'centered'
  }
}

const Template = args => <CardPoint {...args} />

export const Spade = Template.bind({})
Spade.args = {
  card: 'spade',
  point: '3'
}

export const Heart = Template.bind({})
Heart.args = {
  card: 'heart',
  point: '3'
}
