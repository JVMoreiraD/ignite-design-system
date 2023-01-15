import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@jvmoreirad-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading Example',
  } as Meta<HeadingProps>,
}
export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por default o heading sempre sera `h2` mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
