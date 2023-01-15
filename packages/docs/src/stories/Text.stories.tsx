import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@jvmoreirad-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, maiores ex. Deserunt delectus ducimus esse ex. Placeat vitae iure eius laboriosam, possimus distinctio quis at eaque repudiandae impedit molestiae veritatis.',
  } as Meta<TextProps>,
}
export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
