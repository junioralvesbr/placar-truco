import Styles from '../src/styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Goblin',
    values: [
      {
        name: 'Goblin',
        value: '#35563C'
      }
    ]
  },
}

export const decorators = [
  (Story) => (
    <>
      <Styles />
      <Story />
    </>
  )
]