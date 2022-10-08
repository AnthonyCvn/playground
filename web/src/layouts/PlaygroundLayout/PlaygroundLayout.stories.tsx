import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PlaygroundLayout from './PlaygroundLayout'

export const generated: ComponentStory<typeof PlaygroundLayout> = (args) => {
  return <PlaygroundLayout {...args} />
}

export default {
  title: 'Layouts/PlaygroundLayout',
  component: PlaygroundLayout,
} as ComponentMeta<typeof PlaygroundLayout>
