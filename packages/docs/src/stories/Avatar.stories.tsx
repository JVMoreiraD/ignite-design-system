import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@jvmoreirad-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JVMoreiraD.png',
    alt: 'Diego Fernandes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
